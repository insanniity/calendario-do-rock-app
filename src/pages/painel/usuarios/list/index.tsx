import {Box, Grid, Paper, Typography} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import {Page} from "types/page";
import {Usuario} from "types/usuario";
import {useNavigate, useSearchParams} from "react-router-dom";
import Swal from "sweetalert2";
import {toast} from "react-toastify";
import {useAppDispatch, useAppSelector, useConfig} from "hooks";
import {setLoading} from "store/config";


const ListUsuarios = () => {
    const {} = useAppSelector(useConfig);
    const dispatch = useAppDispatch();
    const [page, setPage] = useState<Page<Usuario>>()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams({ size: "10", page: "1"});

    const handleEdit = (id: string) => {
        navigate(`/painel/usuarios/edit/${id}`);
    }

    const handleAdd = () => {
        navigate('/painel/usuarios/add')
    }

    const handleDelete = (id: string) => {
        Swal.fire({
            title: 'Deseja realmente excluir este usuario?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: `Sim, deletar local!`,
            cancelButtonText: `Não`,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
        }).then((result) => {
            if (result.isConfirmed) {
                // dispatch(setLoading(true))
                // LocaisService.delete(id)
                //     .then(() => {
                //         toast.success('Usuario deletado com sucesso.')
                //         getUsuarios()
                //     })
                //     .catch((error) => {
                //         toast.error(error)
                //     })
                //     .finally(() => {
                //         setIsLoading(false)
                //     })
            }
        })
    }


    return (
        <>
            <Grid item xs={12} sx={{mb:3}}>
                {page && page.content.map((local) => (
                    <Box component={Paper} sx={{width: "100%", mb: 2, p: 2, alignItems: "center", justifyContent: "center"}}>
                        <Grid container alignItems={"center"}>
                            <Grid item xs={12} md={5}>
                                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                    <b>Nome: </b><br /> {local.firstName} {local.lastName}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                    <b>Email: </b><br /> {local.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                {/*<ActionButtons handleEdit={() => handleEdit(local.id)} handleDelete={() => handleDelete(local.id)}/>*/}
                            </Grid>
                        </Grid>
                    </Box>
                ))}
            </Grid>
            {/*{page && page.totalElements > 0 &&*/}
            {/*    <Paginacao page={page} searchParams={searchParams} setSearchParams={setSearchParams}/>*/}
            {/*}*/}
            {/*<CustomSpeedDial action={handleAdd}/>*/}
        </>
    )
}


export default ListUsuarios;