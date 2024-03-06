import React, { useState} from 'react';
import { List,  Form, Button, Input, Modal, Space} from 'antd';
import {LeftOutlined  } from '@ant-design/icons';
    

import { useNavigate } from "react-router-dom";
const ToDoListPage = ()=> {
    // const formRef = useRef(null);
    const [formInputTitle, setFormInputTitle] = useState('');
    const [formInputContent, setFormInputContent] = useState('');
    const [listContent, setListContent] = useState([]);
    const [listTile, setListTitle] = useState([]);
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState(null);
    const [confirm, setConfirm] = useState(false);
    const [deleteItem, setDeleteItem] = useState(null);
    const [form] = Form.useForm();
    const navigate = useNavigate();


    const onOpen = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
        onReset();
        setTitle(null);
    };
    const onReset = () => {
        form.resetFields();
    };

    const handleSubmit = (item) => {

        if (title == null) {

            setTitle(null);
            setListTitle([...listTile, formInputTitle]);
            setListContent([...listContent, formInputContent]);
            setVisible(false);

            onReset();
        } else {

            const values = form.getFieldsValue();

            if (title === null) {
                // Adding a new item to the list
                setListTitle([...listTile, values.title]);
                setListContent([...listContent, values.content]);
            } else {
                // Updating an existing item in the list
                const updatedListTitle = [...listTile];
                const updatedListContent = [...listContent];
                const index = listTile.indexOf(title);

                if (index !== -1) {
                    updatedListTitle[index] = values.title;
                    updatedListContent[index] = values.content;

                    setListTitle(updatedListTitle);
                    setListContent(updatedListContent);
                }
            }
            setVisible(false);
            onReset();
            setTitle(null);
        }
    };

    const onUpdate = (item) => {
        setTitle(item.title);
        setVisible(true);
        form.setFieldsValue({
            title: item.title,
            content: item.content,
        });
    };
    const onDelete = (item) => {
        // setConfirm(true)
        const updatedListTitle = [...listTile];
        const updatedListContent = [...listContent];
        const index = listTile.indexOf(item.title);

        if (index !== -1) {
            updatedListTitle.splice(index, 1);
            updatedListContent.splice(index, 1);

            setListTitle(updatedListTitle);
            setListContent(updatedListContent);
        }
        setConfirm(false);
    };

    const closeConfirm = () => {
        setConfirm(false);

    };
    const openConfirm = (item) => {
        setDeleteItem(item);
        setConfirm(true);
    };
    const confirmDelete = () => {
        if (deleteItem) {
            onDelete(deleteItem);
            setConfirm(false);
            setDeleteItem(null);
        }
    };

    return (
<div>
    <div> <Button danger onClick={() => navigate("/")} className="bg-red-500 ml-[10px]  w-[70px]  mt-[10px] text-white font-bold  mr-[280px] h-[40px]   rounded hover:bg-red-600 ... "
                                
                                >     
                                        
                                  <div>     < LeftOutlined  />  </div>  
                             
                              </Button>
                   </div>
        <div className='w-[50%] mx-auto'>
          
            <div className='  mt-36'>
                <h1 className='mx-auto items-center w-48 to-blue-800'>To-Do List</h1>
            </div>
            <Button
                onClick={onOpen}
                className='bg-blue-600 items-end  w-40 ml-[78%] justify-end text-white font-bold mb-[5px]  hover:bg-blue-500 ...'
            >

                New</Button>

            {/* list */}

            <List

                size="small"
                bordered
                dataSource={listTile.map((title, index) => ({ title, content: listContent[index] }))}
                renderItem={(item) => (
                    <List.Item


                        key={item.title} actions={[
                            <Button key="list-loadmore-delete" onClick={() => onUpdate(item)}
                                className='bg-blue-600  w-20 ml-[80%] text-white font-bold  mr-[280px] py-[6px] rounded hover:bg-blue-500 ... '
                            >
                                Edit
                            </Button>,
                            <Button key="list-loadmore-more" onClick={() => openConfirm(item)}
                                className='bg-red-600  w-20  text-white font-bold ml-[4px] py-[6px] rounded hover:bg-red-500 ... '
                            >
                                Delete
                            </Button>
                        ]}>
                        <List.Item.Meta
                            title={item.title}
                            description={item.content} />
                    </List.Item>

                )} />

            {/* form */}

            <Modal
                title={title == null ? "Something new " : "Update"}
                open={visible}
                footer={false}
                closable={false}
            >
                <Form
                    form={form}
                    name="control-hooks"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}

                    autoComplete="off"
                >
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[{ message: 'Please input your username!', },

                        ]}

                        onChange={(e) => setFormInputTitle(e.target.value)}
                        placeholder="Enter item"
                        value={formInputTitle}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Content"
                        name="content"
                        rules={[{ message: 'Please input your content!', },

                        ]}
                        value={formInputContent}
                        onChange={(e) => setFormInputContent(e.target.value)}

                        placeholder="Enter item"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >

                        <Space direction='end'>
                            <Button onClick={onClose} type='danger'
                                className='bg-red-500  text-white outline-none hover:bg-red-600 ... font-bold'>
                                Close
                            </Button>
                            <Button htmlType="submit" onClick={handleSubmit}
                                className='bg-blue-500 font-bold text-white hover:bg-blue-600 ...'>
                                {title == null ? "Submit" : "Update"}
                            </Button>
                        </Space>

                    </Form.Item>
                </Form>
            </Modal>


            {/* Confirm modal */}

            <Modal
            
                    title="Do you want to delete this Record?"  
                    footer={[
                        <Button onClick={closeConfirm}>Cancel</Button>,
                        <Button className='bg-red-600 text-white rounded hover:bg-red-500 ...' onClick={confirmDelete}>Ok</Button>
             ]}
                    closable={false} open={confirm}>
           
            </Modal>
        </div>
        </div>
    );
}
export default ToDoListPage;