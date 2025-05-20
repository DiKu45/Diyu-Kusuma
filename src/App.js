import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { Card } from 'primereact/card';


function App() {
  const items = [
    { label: 'Dashboard', icon: 'pi pi-home' },
    { label: 'Transactions', icon: 'pi pi-heart ' },
    { label: 'Products', icon: 'pi pi-list' },
    { label: 'Messages', icon: 'pi pi-inbox' }
    

  ];

  return (
    <div className="p-4">
      {/* Tab Menu */}
      <div className="card mb-4">
        <TabMenu model={items} />
      </div>

      {/* Hero Section */}
      <section className="text-center p-6 bg-indigo-100 border-round mb-4">
        <h1 className="text-4xl font-bold mb-2">Selamat Datang di Landing Page Kami</h1>
          <p className="text-lg mb-4">Solusi terbaik untuk kebutuhan digital Anda</p>
          <Button label="Pelajari Lebih Lanjut" className="p-button-raised p-button-primary" />
      </section>

      {/* Fitur Section */}
      <section className="grid gap-4 mb-4">
        <div className="col-12 md:col-4">
          <Card title="Diyu Kusuma Bagaswara" subTitle="22.11.5089">
            <p></p>
          </Card>
        </div>
        <div className="col-12 md:col-4">
          <Card title="Muhamad Rifan Kurniawan" subTitle="22.11.5098">
            <p></p>
          </Card>
        </div>
      </section>

      <footer className="text-center p-4 bg-gray-100 border-top-1">
        <p>&copy; {new Date().getFullYear()} Landing Page React</p>
      </footer>
    </div>
  );
}

export default App;
