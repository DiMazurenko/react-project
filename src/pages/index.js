import MeetupList from '../components/meetups/MeetupList';

const DUMMY = [
  {
    id: 1,
    title: 'A first mmetup',
    image: '',
    address: 'fff',
    description: 'fdjvokm',
  },
  {
    id: 2,
    title: 'A second mmetup',
    image: '',
    address: 'fff',
    description: 'fdjvokm',
  },
  {
    id: 3,
    title: 'A third mmetup',
    image: '',
    address: 'fff',
    description: 'fdjvokm',
  },
];

const HomePage = (second) => {
  return <MeetupList meetups={DUMMY} />;
};

export default HomePage;
