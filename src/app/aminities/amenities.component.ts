import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent {
  facilities = [
    { icon: 'wifi', name: 'Hi-Speed Wi-Fi Internet', description: 'We provide all facilities including WIFI connection to our occupants throughout the building with high speed.' },
    { icon: 'local_hotel', name: 'Infrastructure', description: 'We provide one Bed Cover and one Pillow for Each and Every Bed.' },
    { icon: 'kitchen', name: 'Self Cooking', description: 'Our buildings are equipped with hygienic kitchens for self cooking and dining areas to ensure good quality food.' },
    { icon: 'local_laundry_service', name: 'Laundry', description: 'We offer laundry facilities with washing machines for the convenience of our occupants.' },
    { icon: 'security', name: 'Security', description: 'We prioritize the safety and security of our occupants with CCTV cameras and dedicated security personnel.' },
    { icon: 'hot_tub', name: 'Hot Water', description: 'Enjoy the luxury of hot water facilities available in our premises.' },
    { icon: 'local_drink', name: 'Drinking Water', description: 'We provide clean and safe drinking water for all our occupants.' },
    { icon: 'power', name: 'Power Backup', description: 'We have power backup facilities to ensure uninterrupted power supply.' },
    { icon: 'lock', name: 'Separate Lockers', description: 'Each occupant is provided with a separate locker for storing personal belongings.' },
    { icon: 'camera_alt', name: 'CCTV Cameras', description: 'We have CCTV cameras installed in common areas to enhance security and surveillance.' },
    // Add more facilities as needed
  ];
  
  

}
