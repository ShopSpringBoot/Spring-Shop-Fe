import React, { useState, useEffect } from 'react';

function CartPage() {
    const [cartItems, setCartItems] = useState([]); // 장바구니 아이템 상태
    const [orderTotalPrice, setOrderTotalPrice] = useState(0); // 총 주문 금액 상태

    useEffect(() => {
    }, []);

    // 총 주문 금액을 계산하는 함수
    const getOrderTotalPrice = () => {
        let total = 0;
        cartItems.forEach((item) => {
            if (item.checked) {
                total += item.price * item.count;
            }
        });
        setOrderTotalPrice(total);
    };

    // 상품 수량 변경 핸들러
    const handleChangeCount = (cartItemId, count) => {
        // 수량 변경 로직
        // 서버에 수량 업데이트 요청 후 상태 업데이트
        getOrderTotalPrice();
    };

    // 상품 선택/해제 핸들러
    const handleCheckItem = (cartItemId) => {
        // 체크 상태 변경 로직
        getOrderTotalPrice();
    };

    // 전체 선택/해제 핸들러
    const handleCheckAll = (isChecked) => {
        // 전체 선택/해제 로직
        getOrderTotalPrice();
    };

    // 상품 삭제 핸들러
    const handleDeleteCartItem = (cartItemId) => {
        // 삭제 로직
    };

    // 주문하기 핸들러
    const handleOrder = () => {
        // 주문 로직
    };

    return (
        <div className="content-mg">
            <h2 className="mb-4">장바구니 목록</h2>
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <td>
                            <input type="checkbox" onChange={(e) => handleCheckAll(e.target.checked)} />
                            전체선택
                        </td>
                        <td>상품정보</td>
                        <td>상품금액</td>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.cartItemId}>
                            <td className="text-center align-middle">
                                <input
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={() => handleCheckItem(item.cartItemId)}
                                />
                            </td>
                            <td className="d-flex">
                                {/* 상품 정보 */}
                            </td>
                            <td className="text-center align-middle">
                                <span>{item.price * item.count}원</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2 className="text-center">
                총 주문 금액 : <span className="text-danger">{orderTotalPrice}원</span>
            </h2>
            <div className="text-center mt-3">
                <button type="button" className="btn btn-primary btn-lg" onClick={handleOrder}>주문하기</button>
            </div>
        </div>
    );
}

export default CartPage;
