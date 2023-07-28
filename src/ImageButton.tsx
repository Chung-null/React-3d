import React, { useState } from 'react';
import { Button, Collapse, Form, Input, InputNumber } from 'antd';
import './App.css';
import box from "../src/icon/box.png";
import pallet from "../src/icon/pallet.png";
import warehouse from "../src/icon/warehouse.png";
import shelf from "../src/icon/shelf.png";
import conveyor from "../src/icon/conveyor.png";


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

  const handleBoxClick = () => {
    setShowShelfCollapse(false)
    setShowWarehouseCollapse(false)
    setShowPalletCollapse(false)
    setShowConveyorCollapse(false)
    setShowBoxCollapse(!showBoxCollapse)
  }

  const handlePalletClick = () => {
    setShowShelfCollapse(false)
    setShowWarehouseCollapse(false)
    setShowBoxCollapse(false)
    setShowConveyorCollapse(false)
    setShowPalletCollapse(!showBoxCollapse)
  }

  const handleConveyorClick = () => {
    setShowShelfCollapse(false)
    setShowWarehouseCollapse(false)
    setShowPalletCollapse(false)
    setShowBoxCollapse(false)
    setShowConveyorCollapse(!showBoxCollapse)
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
              <Form.Item label="Name">
                <Input placeholder="Enter name shelf" />
              </Form.Item>
              <Form.Item label="Parameters">
                <div className="param2-container">
                  <label>Column</label>
                  <InputNumber placeholder="Enter column shelf" />
                  <label>Row</label>
                  <InputNumber placeholder="Enter row shelf" />
                  <label>Depth</label>
                  <InputNumber placeholder="Enter depth shelf" />
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
