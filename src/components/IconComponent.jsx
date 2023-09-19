import React from 'react'

import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

export default function IconComponent({iconName, color}) {
    switch (iconName) {
        case 'HomeIcon':
          return <HomeIcon sx={{ color :  color , marginRight: '15px'}} />;
        case 'CodeIcon':
          return <CodeIcon sx={{ color :  color , marginRight: '15px'}} />;
        case 'MusicNoteIcon':
          return <MusicNoteIcon sx={{ color :  color , marginRight: '15px'}} />;
        case 'OndemandVideoIcon':
          return <OndemandVideoIcon sx={{ color :  color , marginRight: '15px'}} />;
        case 'SportsEsportsIcon':
          return <SportsEsportsIcon sx={{ color :  color , marginRight: '15px'}} />;
        case 'LiveTvIcon':
          return <LiveTvIcon sx={{ color :  color , marginRight: '15px'}} />;
        case 'SchoolIcon':
          return <SchoolIcon sx={{ color :  color , marginRight: '15px'}} />;
        case 'GraphicEqIcon':
          return <GraphicEqIcon sx={{ color :  color , marginRight: '15px'}} />;
        case 'TheaterComedyIcon':
          return <TheaterComedyIcon sx={{ color :  color , marginRight: '15px'}} />;
        case 'FitnessCenterIcon':
          return <FitnessCenterIcon sx={{ color :  color , marginRight: '15px'}} />;
        case 'DeveloperModeIcon':
          return <DeveloperModeIcon sx={{ color :  color , marginRight: '15px'}} />;
        case 'FaceRetouchingNaturalIcon':
          return <FaceRetouchingNaturalIcon sx={{ color :  color , marginRight: '15px'}} />;
        case 'CheckroomIcon':
          return <CheckroomIcon sx={{ color :  color , marginRight: '15px'}} />;
        // ... Return other icons
        default:
          return null;
      }
}
