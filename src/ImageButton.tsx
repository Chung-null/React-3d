import React, { useState } from 'react';
import { Button, Collapse, DatePicker, Form, Input, InputNumber } from 'antd';
import './App.css';
import box from "../src/icon/box.png";
import pallet from "../src/icon/pallet.png";
import warehouse from "../src/icon/warehouse.png";
import shelf from "../src/icon/shelf.png";
import conveyor from "../src/icon/conveyor.png";
const dateFormat = 'DD/MM/YYYY';



const validateSize = (_: any, value: string) => {
  if (value && (value.includes('e') || value.includes('-'))) {
    return Promise.reject(new Error("Please enter a valid number."));
  }
  return Promise.resolve();
};


const ImageButton = () => {
  const [showShelfCollapse, setShowShelfCollapse] = useState(false);
  const [showWarehouseCollapse, setShowWarehouseCollapse] = useState(false);
  const [showBoxCollapse, setShowBoxCollapse] = useState(false);
  const [showPalletCollapse, setShowPalletCollapse] = useState(false);
  const [showConveyorCollapse, setShowConveyorCollapse] = useState(false);


  const handleWarehouseClick = () => {
    setShowShelfCollapse(false)
    setShowBoxCollapse(false)
    setShowPalletCollapse(false)
    setShowConveyorCollapse(false)
    setShowWarehouseCollapse(!showWarehouseCollapse);
  };


  const handleShelfClick = () => {
    setShowBoxCollapse(false)
    setShowWarehouseCollapse(false)
    setShowPalletCollapse(false)
    setShowConveyorCollapse(false)
    setShowShelfCollapse(!showShelfCollapse);
  };

  const handlePalletClick = () => {
    setShowShelfCollapse(false);
    setShowWarehouseCollapse(false);
    setShowBoxCollapse(false);
    setShowConveyorCollapse(false);
    setShowPalletCollapse(!showPalletCollapse); // Use showPalletCollapse instead of showBoxCollapse
  }

  const handleBoxClick = () => {
    setShowShelfCollapse(false);
    setShowWarehouseCollapse(false);
    setShowPalletCollapse(false);
    setShowConveyorCollapse(false);
    setShowBoxCollapse(!showBoxCollapse);
  }

  const handleConveyorClick = () => {
    setShowShelfCollapse(false);
    setShowWarehouseCollapse(false);
    setShowPalletCollapse(false);
    setShowBoxCollapse(false);
    setShowConveyorCollapse(!showConveyorCollapse); // Use showConveyorCollapse instead of showBoxCollapse
  }
  // Handle key press event for Size InputNumber
  const handleSizeKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.which || event.keyCode;
    const char = String.fromCharCode(charCode);
    if (char === 'e' || char === '-') {
      event.preventDefault();
    }
  }
  return (
    <>
      <div className="image-buttons">
        {/* Other Image Buttons */}
        <Button className="ant-btn-image" type="primary" onClick={handleWarehouseClick}>
          <img src={warehouse} alt="Warehouse" title="Warehouse" />
        </Button>
        {/* Shelf Image Button */}
        <Button className="ant-btn-image" type="primary" onClick={handleShelfClick}>
          <img src={shelf} alt="Shelf" title="Shelf" />
        </Button>
        <Button className="ant-btn-image" type="primary" onClick={handleBoxClick}>
          <img src={box} alt="Box" title="Box" />
        </Button>
        <Button className="ant-btn-image" type="primary" onClick={handlePalletClick}>
          <img src={pallet} alt="Pallet" title="Pallet" />
        </Button>
        <Button className="ant-btn-image" type="primary" onClick={handleConveyorClick}>
          <img src={conveyor} alt="Conveyor" title="Conveyor" />
        </Button>
      </div>

      {/* Conditionally render the Collapse component outside the image-buttons container */}
      {showShelfCollapse && (
        <Collapse className="image-collapse">
          <Collapse.Panel header={<span className="panel-header">Info Shelf</span>} key="1">
            {/* Add your Shelf details content here */}
            <Form layout="vertical">
              <Form.Item label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter name',
                  },
                  // Các quy tắc khác tùy ý có thể thêm vào đây
                ]}
              >
                <Input placeholder="Enter name shelf" />
              </Form.Item>
              <Form.Item label="Size"
                name="size"
                rules={[
                  {
                    required: true,
                    message: 'Please enter size',
                  },
                  {
                    pattern: /^[1-9]*$/,
                    message: "Please enter number"
                  },
                  {
                    validator: validateSize, // Add the custom validator
                  }
                ]}

              >
                <div className="param2-container">
                  <label>Width</label>
                  <InputNumber placeholder="Enter width shelf" type='number' onKeyPress={handleSizeKeyPress} />
                  {/* <input placeholder="Enter width shelf" pattern="[0-9]" type='number' /> */}
                  <label>Height</label>
                  <InputNumber placeholder="Enter height shelf" type='number' onKeyPress={handleSizeKeyPress} />
                  <label>Lenght</label>
                  <InputNumber placeholder="Enter lenght shelf" type='number' onKeyPress={handleSizeKeyPress} />
                </div>
              </Form.Item>
              <Form.Item label="Parameters"
                name="parameters"
                rules={[
                  {
                    required: true,
                    message: 'Please enter parameters',
                  },
                ]}
              >
                <div className="param2-container">
                  <label>Column</label>
                  <InputNumber placeholder="Enter column shelf" type='number' onKeyPress={handleSizeKeyPress} />
                  <label>Row</label>
                  <InputNumber placeholder="Enter row shelf" type='number' onKeyPress={handleSizeKeyPress} />
                  <label>Depth</label>
                  <InputNumber placeholder="Enter depth shelf" type='number' onKeyPress={handleSizeKeyPress} />
                </div>
              </Form.Item>
              {/* Add more Form.Item components for other parameters */}
            </Form>
          </Collapse.Panel>
          <Collapse.Panel header={<span className="panel-header">Location</span>} key="2">
            {/* Add your Shelf details content here */}
            <Form layout="vertical">
              <div className="location-container">
                <label>X:</label>
                <InputNumber placeholder="" type='number' />
                <label>Y:</label>
                <InputNumber placeholder="" type='number' />
                <label>Z:</label>
                <InputNumber placeholder="" type='number' />
                <label>Rotate:</label>
                <InputNumber placeholder="" type='number' />
              </div>
              {/* Add more Form.Item components for other parameters */}
            </Form>
          </Collapse.Panel>
        </Collapse>
      )}
      {showWarehouseCollapse && (
        <Collapse className="image-collapse">
          <Collapse.Panel header={<span className="panel-header">Location</span>} key="1">
            {/* Add your Shelf details content here */}
            <Form layout="vertical">
              <div className="location-container">
                <label>X:</label>
                <InputNumber placeholder="" />
                <label>Y:</label>
                <InputNumber placeholder="" />
                <label>Z:</label>
                <InputNumber placeholder="" />
              </div>
              {/* Add more Form.Item components for other parameters */}
            </Form>
          </Collapse.Panel>
        </Collapse>
      )}
      {showBoxCollapse && (
        <Collapse className="image-collapse">
          <Collapse.Panel header={<span className="panel-header">Info Box</span>} key="1">
            {/* Add your Shelf details content here */}
            <Form layout="vertical">
              <div className="form-group">
                <label className="form-label">Phần trăm hạn sử dụng được phép nhập hàng (%): 55</label>
                <div className="form-group box-form-group">
                  <div className="row-box">
                    <div className="column-box">
                      <label className="box-form-label" style={{ fontSize: '13px' }}>Expiry date</label>
                    </div>
                    <div className="column-box">
                      <Form.Item name="Expirydate">
                        <DatePicker className="box-form-input" placeholder="Nhập hạn sử dụng" format={dateFormat} />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row-box">
                    <div className="column-box">
                      <label className="box-form-label" style={{ fontSize: '13px' }}>Manufacturing date</label>
                    </div>
                    <div className="column-box">
                      <Form.Item name="Manufacturingdate">
                        <DatePicker className="box-form-input" placeholder="Nhập ngày sản xuất" format={dateFormat} />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row-box">
                    <div className="column-box">
                      <label className="box-form-label"  style={{ fontSize: '13px' }}>BBE/BE</label>
                    </div>
                    <div className="column-box">
                      <Form.Item name="BBE">
                        <DatePicker className="box-form-input" placeholder="Ngày sử dụng tốt nhất" format={dateFormat} />
                      </Form.Item>
                    </div>
                  </div>
                </div>

              </div>
              <div className="form-group">
                <div className="rectangle-divider">
                  <h3 className="section-title">Product</h3>
                </div>
                <div className="form-group box-form-group">
                  <div className="row-box">
                    <div className="column-box">
                      <label className="box-form-label"  style={{ fontSize: '13px' }}>Length x Width x Height(cm)</label>
                    </div>
                    <div className="column-box">
                      <div className="input-row">
                        <Form.Item name="boxLength_product">
                          <InputNumber placeholder="Length" className="input-number-small" />
                        </Form.Item>
                        <Form.Item name="boxWidth_product">
                          <InputNumber placeholder="Width" className="input-number-small" />
                        </Form.Item>
                        <Form.Item name="boxHeight_product">
                          <InputNumber placeholder="Height" className="input-number-small" />
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                  <div className="row-box">
                    <div className="column-box">
                      <label className="box-form-label" style={{ fontSize: '13px' }}>Weight(gram)</label>
                    </div>
                    <div className="column-box">
                      <Form.Item name="boxWeight_product">
                        <InputNumber placeholder="Enter product weight" className='input-number-weight' />
                      </Form.Item>
                    </div>
                  </div>
                </div>

              </div>
              <div className="form-group">
              <div className="rectangle-divider">
                  <h3 className="section-title">Box</h3>
                </div>
                <div className="form-group box-form-group">
                  <div className="row-box">
                    <div className="column-box">
                      <label className="box-form-label" style={{ fontSize: '13px' }}>Number of products/box</label>
                    </div>
                    <div className="column-box">
                      <Form.Item name="boxQuantity_box">
                        <InputNumber placeholder="Enter quantity" className='input-number-quantity' />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row-box">
                    <div className="column-box">
                      <label className="box-form-label" style={{ fontSize: '13px' }}>Length x Width x Height(cm)</label>
                    </div>
                    <div className="column-box">
                      <div className="input-row">
                        <Form.Item name="boxLength_product">
                          <InputNumber placeholder="Length" className="input-number-small" />
                        </Form.Item>
                        <Form.Item name="boxWidth_product">
                          <InputNumber placeholder="Width" className="input-number-small" />
                        </Form.Item>
                        <Form.Item name="boxHeight_product">
                          <InputNumber placeholder="Height" className="input-number-small" />
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                  <div className="row-box">
                    <div className="column-box">
                      <label className="box-form-label" style={{ fontSize: '13px' }}>Weight(gram)</label>
                    </div>
                    <div className="column-box">
                      <Form.Item name="boxWeight_box">
                        <InputNumber placeholder="Enter box height" className='input-number-weight' />
                      </Form.Item>
                    </div>
                  </div>
                </div>

              </div>
              {/* Add more Form.Item components for other parameters */}
            </Form>
          </Collapse.Panel>
          <Collapse.Panel header={<span className="panel-header">Location</span>} key="2">
            {/* Add your Shelf details content here */}
            <Form layout="vertical">
              <div className="location-container">
                <label>X:</label>
                <InputNumber placeholder="" />
                <label>Y:</label>
                <InputNumber placeholder="" />
                <label>Z:</label>
                <InputNumber placeholder="" />
              </div>
              {/* Add more Form.Item components for other parameters */}
            </Form>
          </Collapse.Panel>
        </Collapse>
      )}
      {showPalletCollapse && (
        <Collapse className="image-collapse">
          <Collapse.Panel header={<span className="panel-header">Location</span>} key="1">
            {/* Add your Shelf details content here */}
            <Form layout="vertical">
              <div className="location-container">
                <label>X:</label>
                <InputNumber placeholder="" />
                <label>Y:</label>
                <InputNumber placeholder="" />
                <label>Z:</label>
                <InputNumber placeholder="" />
              </div>
              {/* Add more Form.Item components for other parameters */}
            </Form>
          </Collapse.Panel>
        </Collapse>
      )}
      {showConveyorCollapse && (
        <Collapse className="image-collapse">
          <Collapse.Panel header={<span className="panel-header">Location</span>} key="1">
            {/* Add your Shelf details content here */}
            <Form layout="vertical">
              <div className="location-container">
                <label>X:</label>
                <InputNumber placeholder="" />
                <label>Y:</label>
                <InputNumber placeholder="" />
                <label>Z:</label>
                <InputNumber placeholder="" />
              </div>
              {/* Add more Form.Item components for other parameters */}
            </Form>
          </Collapse.Panel>
        </Collapse>
      )}
    </>
  );
};

export default ImageButton;
