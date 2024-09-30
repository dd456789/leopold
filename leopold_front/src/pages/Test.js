import axios from "axios";
import { useEffect } from "react";
import WhiteHeader from "../components/WhiteHeader";

export default function Test() {
	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API_URL}/test`, { withCredentials: true })
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error.response.data);
			})
	}, [])

	const stringValue = "<p>안녕하세요 레오폴드 입니다.</p><p><br /></p><p>키캡 재질은 상세페이지에 설명되어있습니다.</p><p>감사합니다.</p>";

	return (
		<>
			<WhiteHeader />

			<button style={{ display: "flex", margin: "200px auto 0px auto" }} onClick={() => {
				axios.get(`${process.env.REACT_APP_API_URL}/test/info`, { withCredentials: true })
					.then((response) => {
						console.log(response.data);
					})
					.catch((error) => {
						console.log(error.response.data);
					})
			}}>
				현재 로그인된 유저정보 가져오기
			</button>

			<div dangerouslySetInnerHTML={{ __html: stringValue }} style={{ color: "red" }}></div>

		</>
	)
}