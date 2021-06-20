import {
  Typography,
  Container,
  Card,
  makeStyles,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core';
import { useState } from 'react';
import FVHome from './FindVehicle/FVHome';
import Verify from './FindVehicle/Verify';
import EnterOTP from './FindVehicle/EnterOTP';
import VehicleLocation from './FindVehicle/VehicleLocation';
const FindVehicle = ({ MOCK_DATA }) => {
  // console.log(MOCK_DATA);
  const [FVHomeState, setFVHomeState] = useState(true);
  const [VerifyState, setVerifyState] = useState(false);
  const [EnterOTPState, setEnterOTPState] = useState(false);
  const [VehicleLocState, setVehicleLocState] = useState(false);
  const [OTP, setOTP] = useState('');
  const [trackData, setTrackData] = useState({});
  const userData = MOCK_DATA.searchResult;
  const verifiedEmail = MOCK_DATA.searchResult.email;
  const rf_tag = MOCK_DATA.searchResult.rf_tag;
  // console.log(OTP);
  return (
    <Container>
      {FVHomeState && <FVHome setVerifyState={setVerifyState} />}
      {VerifyState && (
        <Verify
          setFVHomeState={setFVHomeState}
          setVerifyState={setVerifyState}
          userData={userData}
          verifiedEmail={verifiedEmail}
          OTP={setOTP}
          setEnterOTPState={setEnterOTPState}
        />
      )}
      {EnterOTPState && (
        <EnterOTP
          setVerifyState={setVerifyState}
          OTP={OTP}
          rf_tag={rf_tag}
          setVehicleLocState={setVehicleLocState}
          setTrackData={setTrackData}
        />
      )}
      {VehicleLocState && (
        <VehicleLocation
          setEnterOTPState={setEnterOTPState}
          userdata={trackData}
          vehicleData={userData}
        />
      )}
    </Container>
  );
};

export default FindVehicle;
