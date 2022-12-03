interface UserFormProps {
  data: {
    email: string;
    name: string;
    review: string;
    comment: string;
  };
  onUpdateField: (key: string, value: string) => void;
}

export function UserForm({ data, onUpdateField }: UserFormProps) {
  return (
    <div className="">
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Digite o seu nome"
          value={data.name || ""}
          onChange={(e) => onUpdateField("name", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Digite o seu email"
          value={data.email}
          onChange={(e) => onUpdateField("email", e.target.value)}
        />
      </div>
    </div>
  );
}
