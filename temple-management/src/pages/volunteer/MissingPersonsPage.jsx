import React, { useState } from 'react';
import Card from '../../components/common/Card.jsx';
import Button from '../../components/common/Button.jsx';
import Modal from '../../components/common/Modal.jsx';
import FacialRecognitionStatus from '../../components/features/FacialRecognitionStatus.jsx';
import { UserPlus } from 'lucide-react';

// Mock Data to start with
const initialMissingPersons = [
    {
        id: 1,
        name: 'Ramesh Kumar',
        age: 68,
        image: 'https://placehold.co/100x100/E67E22/white?text=RK',
        lastSeen: 'Near Main Gate',
        description: 'Wearing a white kurta and glasses.',
        status: 'Actively Searching',
        timelineData: [
            { time: '02:30 PM', location: 'Prasad Counter', status: 'CCTV footage analyzed. Individual seen moving towards the exit.', type: 'cctv', image: 'https://placehold.co/600x400/333/fff?text=CCTV+Footage+1' },
            { time: '02:15 PM', location: 'Main Temple Hall', status: 'Last seen by family members.', type: 'report' },
        ]
    },
    {
        id: 2,
        name: 'Sunita Devi',
        age: 45,
        image: 'https://placehold.co/100x100/2ECC71/white?text=SD',
        lastSeen: 'Near Prasad Counter',
        description: 'Wearing a red and yellow saree.',
        status: 'Located',
        timelineData: [
            { time: '04:00 PM', location: 'Medical Tent 2', status: 'Found safe and sound. Reunited with family.', type: 'report' },
            { time: '03:45 PM', location: 'East Parking Lot', status: 'Spotted by Volunteer #14 near shuttle bus area.', type: 'cctv', image: 'https://placehold.co/600x400/333/fff?text=CCTV+Footage+2' },
        ]
    }
];

const MissingPersonsPage = () => {
    const [missingPersons, setMissingPersons] = useState(initialMissingPersons);
    const [selectedPerson, setSelectedPerson] = useState(initialMissingPersons[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // State for the new person form
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const handleAddPerson = (e) => {
        e.preventDefault();
        const newPerson = {
            id: missingPersons.length + 1,
            name: newName,
            age: newAge,
            image: `https://placehold.co/100x100/3498DB/white?text=${newName.charAt(0)}`,
            lastSeen: 'Just Reported',
            description: newDescription,
            status: 'New Report',
            timelineData: [{ time: new Date().toLocaleTimeString(), location: 'Volunteer Help Desk', status: 'Report filed by family.', type: 'report' }]
        };
        setMissingPersons([newPerson, ...missingPersons]);
        setSelectedPerson(newPerson);
        setIsModalOpen(false);
        // Reset form
        setNewName('');
        setNewAge('');
        setNewDescription('');
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-80px)]">
            {/* Left Column: List of Missing Persons */}
            <div className="lg:col-span-1 bg-gray-800 p-4 rounded-lg overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Missing Persons</h2>
                    <Button onClick={() => setIsModalOpen(true)}>
                        <UserPlus size={20} className="mr-2" /> Report
                    </Button>
                </div>
                <div className="space-y-4">
                    {missingPersons.map(person => (
                        <div key={person.id} onClick={() => setSelectedPerson(person)} className={`p-4 rounded-lg cursor-pointer transition-all ${selectedPerson?.id === person.id ? 'bg-orange-600' : 'bg-gray-700 hover:bg-gray-600'}`}>
                             <div className="flex items-center">
                                <img src={person.image} alt={person.name} className="w-16 h-16 rounded-full mr-4 border-2 border-white" />
                                <div>
                                    <h3 className="font-bold text-lg">{person.name}</h3>
                                    <p className="text-sm text-gray-300">Age: {person.age}</p>
                                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${person.status === 'Located' ? 'bg-green-500' : 'bg-red-500'}`}>{person.status}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Details and Timeline */}
            <div className="lg:col-span-2">
                <FacialRecognitionStatus timelineData={selectedPerson?.timelineData} />
            </div>

            {/* Modal for adding a new person */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Report a Missing Person">
                <form onSubmit={handleAddPerson} className="space-y-4">
                     <div>
                        <label className="block text-sm font-medium text-gray-300">Full Name</label>
                        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} className="mt-1 w-full bg-gray-600 text-white rounded p-2" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Age</label>
                        <input type="number" value={newAge} onChange={(e) => setNewAge(e.target.value)} className="mt-1 w-full bg-gray-600 text-white rounded p-2" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Description (e.g., clothing)</label>
                        <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} className="mt-1 w-full bg-gray-600 text-white rounded p-2" rows="3" required></textarea>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-300">Upload Photo</label>
                        <input type="file" className="mt-1 w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600"/>
                    </div>
                    <div className="flex justify-end pt-4">
                        <Button type="submit">Submit Report</Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default MissingPersonsPage;