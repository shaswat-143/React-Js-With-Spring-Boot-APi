package Backend.springbootbackend.repository;

import Backend.springbootbackend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
public interface StudentRepository extends JpaRepository<Student, Long> {
    //all crud database methods
}
