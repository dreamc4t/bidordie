package com.example.bidordiespring.service;

import org.apache.tomcat.util.http.fileupload.FileItem;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class FileUploadService {

    File file1 = new File("");
    Path path = Paths.get(file1.getAbsolutePath());
    Path rootPath = path.getParent();
    private String pathOfUploadedFile = rootPath.toString() + "/public/uploadedFiles/";

    public String getPathOfUploadedFile() {
        return pathOfUploadedFile;
    }

    public void setPathOfUploadedFile(String pathOfUploadedFile) {
        this.pathOfUploadedFile = pathOfUploadedFile;
    }

    public void init() throws IOException {
        Files.createDirectories(Paths.get(rootPath + "/public/uploadedFiles/"));
    }


    public void uploadFile(MultipartFile file) throws IllegalStateException, IOException {
        file.transferTo(new File(rootPath + "/public/uploadedFiles/"+ file.getOriginalFilename()));
        System.out.println("Uploading file " + file.getOriginalFilename());

    }

    public void deleteFile(MultipartFile file) throws IllegalStateException, IOException {
        Path filePath = Path.of(rootPath + "/public/uploadedFiles/" + file.getOriginalFilename());
        System.out.println("Deleting file " + file.getOriginalFilename());
        Files.delete(filePath);
     }
     
     public List<String> getFilesList() {
        List<String> listOfFiles = null;
         try (Stream<Path> walk = Files.walk(Paths.get(pathOfUploadedFile))) {
             listOfFiles = walk.filter(Files::isRegularFile)
                     .map(x -> x.toString()).collect(Collectors.toList());

             listOfFiles.forEach(System.out::println);
         } catch (IOException e) {
             e.printStackTrace();
         }
         return listOfFiles;
     }


}






