
import React, { useState, useEffect } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {

    InputNumber,
    Cascader,
    Select,
    Row,
    Col,

    AutoComplete,
} from 'antd';

const { Option } = Select;


const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };


const SigIn = () => {
    const [sig, setSig] = useState(true);
    const [sigIn, setSigIn] = useState(true)


    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const [form] = Form.useForm();

 



    return (
        <div>
            {
                sig ? (
                    <div className="container">
                        {/* <form>
                            SigIn
                            <div class="row">
                                <div class="cell-md-6">
                                    <input type="email" name="email" placeholder="email" class="metro-input" />
                                </div>
                                <div class="cell-md-6">
                                    <input type="password" name="password" placeholder="password" class="metro-input" />
                                </div>
                            </div>
                            <button className="btn btn-primary">hola</button>
                        </form> */}

                        {
                            sigIn ? (
                                "algo"
                            ) :
                                (
                                    <Form
                                        name="normal_login"
                                        className="login-form"
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}
                                    >
                                        <Form.Item
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Username!',
                                                },
                                            ]}
                                        >
                                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                        </Form.Item>
                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your Password!',
                                                },
                                            ]}
                                        >
                                            <Input
                                                prefix={<LockOutlined className="site-form-item-icon" />}
                                                type="password"
                                                placeholder="Password"
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                                <Checkbox>Remember me</Checkbox>
                                            </Form.Item>

                                            <a className="login-form-forgot" href="">
                                                Forgot password
                                            </a>
                                        </Form.Item>

                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                                Log in
                                            </Button>
                                            Or <a href="">register now!</a>
                                        </Form.Item>
                                    </Form>
                                )

                        }




                    </div>
                ) : (
                    <div className="container">
                        hola
                    </div>
                )
            }



        </div>
    )

}

export default SigIn
