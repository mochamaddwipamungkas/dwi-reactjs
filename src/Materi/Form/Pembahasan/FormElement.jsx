import React from "react";

export default class FormElement extends React.Component {
    state = {
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        member: false

    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
            nama: ${this.state.nama}
            jurusan: ${this.state.jurusan}
            gender: ${this.state.gender}
            alamat: ${this.state.alamat}
            member: ${this.state.member ? 'YES' : 'NO'}
        `);
        this.setState({
            nama: '',
            jurusan: '',
            gender: '',
            alamat: '',
            member: false
        })
    }

    render() {

        return (
            <div style={{ margin: '100px auto', border: '1px solid grey', padding: '20px' }}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nama: <input
                            type="text"
                            name="nama"
                            onChange={e => this.setState({ nama: e.target.value }, () => console.log(this.state))}
                            defaultValue={this.props.nama}
                        />

                    </label>
                    <br />
                    <label>
                        Jrusan: <select
                            name="jurusan"
                            onChange={e => this.setState({ jurusan: e.target.value }, () => console.log(this.state))}>
                            <option value="">Pilih Jurusan</option>
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Sistem Informasi">Sistem Informasi</option>
                            <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Jenis Kelamin:
                        <input type="radio" value="Laki-laki" name="gender"
                            onChange={e => this.setState({ gender: e.target.value }, () => console.log(this.state))} />Laki-laki
                        <input type="radio" value="Perempuan" name="gender"
                            onChange={e => this.setState({ gender: e.target.value }, () => console.log(this.state))} />Perempuan
                    </label>
                    <br />
                    <label>
                        Alamat : <textarea cols="30" rows="10" name="alamat"
                            onChange={e => this.setState({ alamat: e.target.value })} value={this.state.alamat}></textarea>
                    </label>
                    <br />
                    <label>
                        Member: <input type="checkbox" checked={this.state.member} name='member'
                            onChange={e => this.setState({ member: e.target.checked }, () => console.log(this.state))} />
                    </label>
                    <button type="submit">Send</button>
                </form >
            </div >

        )

    }
}