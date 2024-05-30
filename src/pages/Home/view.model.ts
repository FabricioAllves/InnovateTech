import { useEffect, useMemo, useState } from "react";
import repositorySearch from "src/models/repositories/search.repository";
import { useStudantStore } from "src/store/studant.store";
import { User } from "src/types/user";
import { getLocalStorageListOnePage, removeLocalStorageListOnePage, setLocalStorageListOnePage } from "src/utils/Storage";

const useSearchStudant = () => {
  const [filteredStudants, setFilteredStudants] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisibleFilter, setModalVisibleFilter] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)

  const { setStudant, gender } = useStudantStore()

  const MoreDetailsStudant = (studantUser: User) => {
    setStudant(studantUser)
    setModalVisible(true)
  }

  const filteredData = useMemo(() => {
    return filteredStudants.filter(item =>
      (item.name.title.toLowerCase().includes(value.toLowerCase()) ||
        item.name.first.toLowerCase().includes(value.toLowerCase()) ||
        item.name.last.toLowerCase().includes(value.toLowerCase())) &&
      (gender === 'all' || item.gender === gender)
    );
  }, [filteredStudants, value, gender]);

  const fetchStudents = async () => {
    try {
      let data;

      if (page === 1) {
        const localData = await getLocalStorageListOnePage();
        
        if (localData) {
          data = { results: localData };
        } else {
          const response = await repositorySearch.fetchStudents(page);
          data = response?.data;
          if (data?.results) {
            await setLocalStorageListOnePage(data.results);
          }
        }
      } else {
        const response = await repositorySearch.fetchStudents(page);
        data = response?.data;
      }

      if (!data) return;

      if (page > 1) {
        setFilteredStudants((oldValue) => [...oldValue, ...data.results]);
      } else {
        setFilteredStudants(data.results);
      }

      setLoading(false);
      setLoadingMore(false);
    } catch (error) {
      console.log('Error occurred in the call fetchStudents: ', error);
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleFetchMore = async (distance: number) => {
    if (distance < 1) return;
    setLoading(true);
    setLoadingMore(true)
    setPage((oldValue) => oldValue + 1);
  }

  // async function removeData(){
  //   await removeLocalStorageListOnePage()
  // }

  useEffect(() => {
    fetchStudents();
    //removeData()
  }, [page]);

  return {
    value,
    setValue,
    filteredData,
    modalVisibleFilter,
    modalVisible,
    setModalVisible,
    setModalVisibleFilter,
    loadingMore,
    MoreDetailsStudant,
    handleFetchMore
  };
}

export default useSearchStudant;