// ... existing code ...
async handle(req: Request, res: Response) {
    const { id } = req.params;  // Verificar se está pegando o id corretamente
    const { name, crm, telefone } = req.body;

    console.log('ID recebido:', id); // Para debug

    const updateDoctorService = new UpdateDoctorService();
    const doctor = await updateDoctorService.execute(id, { name, crm, telefone });
    
    return res.json(doctor);
}
// ... existing code ...