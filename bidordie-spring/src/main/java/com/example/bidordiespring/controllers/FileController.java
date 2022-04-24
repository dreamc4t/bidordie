package com.example.bidordiespring.controllers;

import com.example.bidordiespring.models.Files;
import com.example.bidordiespring.repository.FilesRepository;
import com.example.bidordiespring.service.FileUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/files")
public class FileController {


    @Autowired
    FileUploadService fileUploadService;

    @Autowired
    FilesRepository filesRepository;


    @PostMapping("/new")
    public void uploadFile(@RequestParam("file") MultipartFile file) throws IllegalStateException, IOException {
        fileUploadService.init();
        fileUploadService.uploadFile(file);
        filesRepository.save(new Files(fileUploadService.getPathOfUploadedFile()));

    }

    @PutMapping("/change")
    public void changeFile() {

    }

    @DeleteMapping("/del")
    public void deleteFile() {

    }
}
