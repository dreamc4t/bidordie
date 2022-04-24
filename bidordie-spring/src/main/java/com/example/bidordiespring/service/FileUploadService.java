package com.example.bidordiespring.service;

import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

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
}






