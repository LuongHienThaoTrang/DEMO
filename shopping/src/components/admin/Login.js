import React, { useState, useEffect } from 'react'
import { Button, Card, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


/*
***QUY TẮC LOGIN
* Chúng ta login success: nhận được Token để định danh -> Ta lưu Token: (Cookie, local storage)
* Khi truy cập vào page admin hoặc admin login: Kiểm tra chỗ mà ta lưu có Token không, nếu có Token === Đã login 

***LOGIN ADMIN
* JWT web Token:
* Trong 1 Token, nó là định danh của 1 user nó cho ta biết database lưu ntn khi ta đăng nhập, nó kiểm tra username, password
=> Bắt buộc password nó phải mã hóa, khi nó kiểm tra username, password nếu đúng 
* Nó có 2 loại lưu Token:
* Lưu Array: Cho phép 1 tài khoản được login ở nhiều thiết bị -> Mỗi thiết bị khi login nó trả về 1 cái Token. Nên khi làm chức năng logout account thì nó sẽ clear hết tất cả Token trong mảng
* Lưu String: Một tài khoản chỉ được login đồng thời 1 thiết bị. Khi login ở máy khác thì máy cũ sẽ bị logout
Khi gửi request lên nó sẽ nhận Token thay vì nhận username, password bởi vì ta đã login rồi. Nó sẽ tìm Token trong hệ thống
*/



export default function Login() {

    const [email, setEmail] = useState('0306181082@caothang.edu.vn')
    const [password, setPassword] = useState('301741045')
    const navigate = useNavigate();

    useEffect(() => {
        // Nếu trang login có adminToken === đã login: thì chuyển hướng qua trang admin
        if(JSON.parse(window.localStorage.getItem('adminToken'))) {
            navigate('/admin')
        }
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        // Đưa Token lên 
        axios.post('http://localhost:9696/login', {
            // Thông tin User Admin Login
            email,
            password
        })
            .then((response) => {
                console.log(response);
                // // Lấy ra Token
                const Token = response.data;
                // // Lưu vào local storage
                window.localStorage.setItem('adminToken', JSON.stringify(Token))
                // Khi login success, nó có phản hồi
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfully',
                    timer: 2000,
                    timerProgressBar: true,
                })
                // Khi login success, nó phải chuyển trang
                // ở trên có timerid nên dùng then
                .then(() => {
                    navigate('/admin')
                })
            })
            .catch((error) => {
                console.log(error);
                // Khi login error, nó có phản hồi
                Swal.fire({
                    icon: 'error',
                    title: 'Login unSuccessfully',
                    timer: 2000,
                    timerProgressBar: true,
                })
            })
    }

    return (
        <div className="center login-page">
            <Card className="login-modal">
                <Form onSubmit={handleLogin}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input id="exampleEmail" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="with a placeholder" type="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword"> Password</Label>
                        <Input id="examplePassword" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password placeholder" type="password" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Card>
        </div>
    )
}



// export default class Login extends Component {

//     state = {
//         email: "",
//         password: ""
//     }

//     componentDidMount() {
        
//     }

//     handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleLogin = e => {
//         e.preventDefault();
//         // Đưa Token lên 
//         axios.post('http://localhost:9696/login', {
//             // Thông tin User Admin Login
//             ...this.state
//         })
//             .then((response) => {
//                 console.log(response);
//                 // // Lấy ra Token
//                 const Token = response.data;
//                 // // Lưu vào local storage
//                 window.localStorage.setItem('adminToken', JSON.stringify(Token))
//                 // Khi login success, nó có phản hồi
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Login Successfully',
//                     timer: 2000,
//                     timerProgressBar: true,
//                 })
//                 // Khi login success, nó phải chuyển trang
//                 .then(() => {

//                 })
//             })
//             .catch((error) => {
//                 console.log(error);
//                 // Khi login error, nó có phản hồi
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Login unSuccessfully',
//                     timer: 2000,
//                     timerProgressBar: true,
//                 })
//             })
//     }

//     render() {
//         return (
//             <div className="center login-page">
//                 <Card className="login-modal">
//                     <Form onSubmit={this.handleLogin}>
//                         <FormGroup>
//                             <Label for="exampleEmail">Email</Label>
//                             <Input id="exampleEmail" name="email" onChange={this.handleChange} placeholder="with a placeholder" type="email" />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="examplePassword"> Password</Label>
//                             <Input id="examplePassword" name="password" onChange={this.handleChange} placeholder="password placeholder" type="password" />
//                         </FormGroup>
//                         <Button>Submit</Button>
//                     </Form>
//                 </Card>
//             </div>
//         )
//     }
// }
