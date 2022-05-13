import './AppointmentBanner.css'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../../assets/images/bg.png'
const AppointmentBanner = ({date,setDate}) => {

    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} class="hero min-h-screen">
          <div class="hero-content flex-col lg:flex-row">
            <img src="https://thumbs.dreamstime.com/b/dental-chair-instruments-dentist-s-office-61286268.jpg" class="max-w-sm rounded-lg shadow-2xl mr-20" />
            <div className='shadow-2xl'>
            <DayPicker 
                  mode="single"
                  selected={date} 
                  onSelect={setDate}
            />
            </div>
          </div>
        </div>
    );
};

export default AppointmentBanner;