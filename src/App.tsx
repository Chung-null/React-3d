import React, { useEffect, useRef, useState } from 'react';
import { Engine as Enginee, Scene as Scenee } from 'react-babylonjs';
import { Engine, Scene, HemisphericLight, MeshBuilder, Vector3, ArcRotateCamera } from '@babylonjs/core';
import { Button } from 'antd';
import './App.css';
import ImageButton from './ImageButton';

const BabylonScene = () => {
  useEffect(() => {
    // Khởi tạo các hàm Babylon.js ở đây
    const canvas: any = document.getElementById('babylonCanvas');
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);
    const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);
    const sphere = MeshBuilder.CreateSphere('sphere1', { diameter: 1 }, scene);
    sphere.position.y = 1;
    const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 4, 15, Vector3.Zero(), scene);
    // this.camera = new FreeCamera("camera", new Vector3(0, 20, 10), this.scene);

    camera.attachControl(canvas, true);
    camera.inputs.removeByType("ArcRotateCameraKeyboardMoveInput");
    scene.activeCamera = camera;
    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener('resize', () => {
      engine.resize();
    });

    return () => {
      // Cleanup khi unmount
      engine.stopRenderLoop();
      window.removeEventListener('resize', () => {
        engine.resize();
      });
    };
  }, []);
  const [showImageButtons, setShowImageButtons] = useState(false);
  const [showResultNotification, setShowResultNotification] = useState(false);
  // State to control the visibility of the guide
  const [showGuide, setShowGuide] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [showBackAndDelete, setShowBackAndDelete] = useState(false);

  const handleEditClick = () => {
    setShowImageButtons((prevShowImageButtons) => !prevShowImageButtons);
    setShowGuide(true);
  };
  const handleSaveClick = () => {
    setShowResultNotification(true);
  };

  const handleSaveConfirm = () => {
    // Perform save logic here
    setResultMessage('Done save!');

    setTimeout(() => {
      setShowResultNotification(false);
      setResultMessage('');
      // Reset all other states and show only the "Edit" button
      setShowBackAndDelete(false);
      setShowImageButtons(false);
      setShowGuide(false);// Reset the result message after hiding the notification
    }, 2000); // Hide the notification after 3 seconds (adjust the time as needed)
  };

  const handleSaveCancel = () => {
    setShowResultNotification(false);
  };

  const ResultNotification = () => {
    const handleSave = () => {
      handleSaveConfirm();
    };
    return (
      <div className="result-notification">
        {resultMessage === '' ? ( // Show the prompt if resultMessage is empty
          <div className="result-prompt">Do you want to save?</div>
        ) : (
          // Show the result message if it's not empty
          <div className="result-message">{resultMessage}</div>
        )}
        {resultMessage === '' && ( // Show buttons only if resultMessage is empty
          <div className="result-buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleSaveCancel}>Cancel</button>
          </div>
        )}
      </div>
    );
  };
  const handleBackClick = () => {
    setShowImageButtons(false);
  };

  const guideContent = (
    <div className="guide-content" id='guide-use'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
        nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
        tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
        nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos.
      </p>
      {/* Add more guide content here */}
    </div>
  );

  return (
    <div className='App'>
      <Enginee antialias adaptToDeviceRatio canvasId="babylonCanvas">
        <Scenee>
        </Scenee>
      </Enginee>
      <div className="buttons-container">
        {showImageButtons ? (
          <><Button className="ant-btn-save" type="primary" onClick={handleSaveClick} id='save-data'>
            Save
          </Button>
            <Button className="ant-btn-back" type="primary" onClick={handleBackClick} id='back-data'>
              Back
            </Button>
            <Button className="ant-btn-delete" type="primary" id='delete-data'>
              Delete
            </Button>
          </>
        ) : (
          <Button className="ant-btn-edit" type="primary" onClick={handleEditClick} id='edit-data'>
            Edit
          </Button>
        )}
      </div>
      {showImageButtons && <ImageButton />}
      {showResultNotification && <ResultNotification />}
      {showGuide && (
        <div className="guide-panel">
          <div className="guide-panel-content">{guideContent}</div>
        </div>
      )}
    </div>

  );
};

export default BabylonScene;
