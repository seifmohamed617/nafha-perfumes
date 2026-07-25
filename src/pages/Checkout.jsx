import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, CreditCard, Banknote, Check } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { OrderSummary } from '../components/OrderSummary';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { generateOrderCode } from '../utils/formatters';

export function Checkout() {
  const navigate = useNavigate();
  const { cartItems, clearCart, grandTotal } = useCart();
  const { addToast } = useToast();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    orderNotes: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('cod'); // cod | card
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmOrder = (e) => {
    if (e) e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.address || !formData.city) {
      addToast('Please complete all required shipping fields', 'error');
      return;
    }

    const orderId = generateOrderCode();
    const orderDetails = {
      orderId,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      shipping: formData,
      paymentMethod,
      items: [...cartItems],
      totalAmount: grandTotal
    };

    // Store completed order in localStorage for history
    const existingOrders = JSON.parse(localStorage.getItem('nafha_orders') || '[]');
    localStorage.setItem('nafha_orders', JSON.stringify([orderDetails, ...existingOrders]));

    clearCart();
    addToast(`Order ${orderId} confirmed successfully!`, 'success');
    navigate('/order-success', { state: { order: orderDetails } });
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div style={{ padding: '40px 0 90px 0' }}>
      <div className="container">
        <Breadcrumb items={[{ label: 'Cart', link: '/cart' }, { label: 'Checkout' }]} />

        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', color: 'var(--text-white)' }}>
            Checkout & Order Details
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            رجاءً املأ بيانات الشحن واختر طريقة الدفع المناسبة لك.
          </p>
        </div>

        <form onSubmit={handleConfirmOrder} className="grid-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '32px' }}>
          {/* Left Form Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Shipping Information Box */}
            <div className="glass-card" style={{ padding: '30px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '20px', borderBottom: '1px solid var(--border-dark)', paddingBottom: '12px' }}>
                1. عنوان الشحن
              </h3>

              <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">الاسم بالكامل *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="الاسم بالكامل"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">رقم الهاتف *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010xxxxxxxx"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">البريد الإلكتروني (للفاتورة)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ahmed@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">العنوان بالكامل *</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="123 شارع الملك فيصل، الدور 4"
                  className="form-input"
                />
              </div>

              <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">المدينة *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="القاهرة / الإسكندرية / جدة"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">الرمز البريدي</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="12345"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">ملاحظات خاصة للتوصيل</label>
                <textarea
                  name="orderNotes"
                  rows="3"
                  value={formData.orderNotes}
                  onChange={handleChange}
                  placeholder="ترك الطلب عند البوابة أو تغليف هدية"
                  className="form-input"
                  style={{ resize: 'vertical' }}
                />
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="glass-card" style={{ padding: '30px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '20px', borderBottom: '1px solid var(--border-dark)', paddingBottom: '12px' }}>
                2. طريقة الدفع
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                {/* Cash on Delivery Option */}
                <div
                  onClick={() => setPaymentMethod('cod')}
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-md)',
                    border: paymentMethod === 'cod' ? '1px solid var(--border-gold)' : '1px solid var(--border-dark)',
                    background: paymentMethod === 'cod' ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Banknote size={24} color="var(--gold-light)" />
                    {paymentMethod === 'cod' && <Check size={18} color="var(--gold-primary)" />}
                  </div>
                  <strong style={{ fontSize: '1rem', color: 'var(--text-white)' }}>الدفع عند الاستلام</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ادفع نقدًا عند وصول الطلب.</span>
                </div>

                {/* Credit Card Option */}
                <div
                  onClick={() => setPaymentMethod('card')}
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-md)',
                    border: paymentMethod === 'card' ? '1px solid var(--border-gold)' : '1px solid var(--border-dark)',
                    background: paymentMethod === 'card' ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <CreditCard size={24} color="var(--gold-light)" />
                    {paymentMethod === 'card' && <Check size={18} color="var(--gold-primary)" />}
                  </div>
                  <strong style={{ fontSize: '1rem', color: 'var(--text-white)' }}>بطاقة ائتمان</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>مدعومة للبطاقات المحلية والدولية.</span>
                </div>
              </div>

              {/* Credit Card Mock Input Form */}
              {paymentMethod === 'card' && (
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)' }}>
                  <div className="form-group">
                    <label className="form-label">رقم البطاقة</label>
                    <input
                      type="text"
                      placeholder="1234 •••• •••• 5678"
                      className="form-input"
                      value={cardData.cardNumber}
                      onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
                    />
                  </div>

                  <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div className="form-group">
                      <label className="form-label">تاريخ الانتهاء</label>
                      <input
                        type="text"
                        placeholder="شهر/سنة"
                        className="form-input"
                        value={cardData.expiry}
                        onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">رمز الأمان</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="form-input"
                        value={cardData.cvv}
                        onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column Order Summary */}
          <div>
            <OrderSummary isCheckoutPage onConfirmOrder={handleConfirmOrder} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;

