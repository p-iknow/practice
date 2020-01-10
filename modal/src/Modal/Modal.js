import React from "react";
import styles from "./ModalContent.scss";
import classNames from "classnames/bind";
import parser from "html-react-parser";

const cx = classNames.bind(styles);

const Modal = ({ setIsModalOpen }) => {
	const onHandleOK = () => {
		setIsModalOpen(false);
	};
	const msg =
		"-보유 포인트가 부족할 경우 구매가 불가능합니다.\n-포인트몰 상품은 월 1회 구매 가능합니다.\n-일반 상품 별로 최대 2개까지 구매 가능합니다.\n*스타벅스 아메리카노 상품은 최대 1회까지 구매 가능합니다.\n-포인트몰 수강권, 상품은 구매 후 환불 및 교환이 불가능합니다.\n-일반 상품 쿠폰 발송은 신청 후 최대 2주 내로 진행됩니다.\n-구매 시 연락처를 잘못 입력하여 오배송 된 경우, 재발송이 불가합니다.\n- 수강권 구매시 획득한 포인트로 상품 구매후, 수강권 환불시에는 환불 금액에서 사용하신 포인트만큼 차감 후 환불됩니다.\n- 친구추천 활동을 통해 포인트를 획득한 후, 친구추천 대상자(수신자)가 환불 진행시 지급된 포인트는 회수됩니다.";
	const message = parser(msg);
	return (
		<div className={cx("layer_comm", `layer_comm_${this.props.condition}`)}>
			<div className={cx("dimmed")} onClick={this.handleDimmer} />
			<div className={cx("inner_wrapper")}>
				<div className={cx("inner_layer")}>
					<div className={cx("info_layer")}>
						<strong className={cx("tit_simple")}>유의사항</strong>
						<p className={cx("txt_simple")}>{message}</p>;
					</div>
					<div className={cx("wrap_button")}>
						<button
							type="button"
							className={cx("btn_comm")}
							onClick={onHandleOK}
						>
							{확인}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
