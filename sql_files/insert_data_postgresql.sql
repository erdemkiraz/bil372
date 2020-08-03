
INSERT INTO person VALUES 
  (11111111111, 'Erdem', 'Kirez', 'M', 'erdem@erdem.com', 5555555555);
INSERT INTO person VALUES 
  (84958948596, 'Ahmet', 'Ogrenci', 'F', 'ahmet@gmail.com', 5555421106);
INSERT INTO person VALUES 
  (34343343434, 'Ayse', 'Ogrenci', 'M', 'ayse@gmail.com', 5125122782);
INSERT INTO person VALUES 
  (58395838281, 'Ogrenen Ali', 'Ogrencioglu', 'M', 'ali@ogrenci.com', null);
INSERT INTO person VALUES 
  (38858577737, 'Baska Bir', 'Ogrenci', 'F', 'birogrenci@etu.edu.tr', 5125125125);
INSERT INTO person VALUES 
  (86038502993, 'Hoca Ayberk', 'Hoca1', 'M', 'ayberk@hoca.com', 5674860291);
INSERT INTO person VALUES 
  (77685930124, 'Hoca Basak', 'Hoca2', 'F', 'basak@hoca.com', 5528629601);
INSERT INTO person VALUES 
  (86728694869, 'Ahmet', 'the Gorevli', 'M', 'ahmet.gorevde@gmail.com', 5551201200);
INSERT INTO person VALUES 
  (57399502842, 'Hem Asistan', 'Hem de Ogrenci', 'F', 'ogrenci@asistan.com', null);
INSERT INTO person VALUES 
  (11305738291, 'Gorevli X', 'Gizli', 'M', 'undercover@x.com', null);
INSERT INTO person VALUES 
  (40183884848, 'Istanbul', 'Istanbulkizi', 'M', 'ist@anbul.com', 5748583848);
INSERT INTO person VALUES 
  (50098212002, 'Ahmet', 'Docentoglu', 'M', 'doc@ahmet.com', 8585858274);
INSERT INTO person VALUES 
  (17624205055, 'Denizoglu', 'Deniz', 'F', 'deniz@gmail.com', 5000000000);
--
INSERT INTO course VALUES ('BIL372', 'Bilgisayar Muh', 'Veritabani Sistemleri', 4);
INSERT INTO course VALUES ('BIL113', 'Bilgisayar Muh', 'Programlamaya Giris', 3);
INSERT INTO course VALUES ('ISP001', 'Yabanci Diller', 'Ispanyolca', 3);
INSERT INTO course VALUES ('BIL555', 'Bilgisayar Muh', 'Super Bilgisayar Dersi', 5);
INSERT INTO course VALUES ('ELE222', 'Bilgisayar Muh', 'Sinyal Isleme', 3);
INSERT INTO course VALUES ('MAK372', 'Makine Muh', 'Statik', 3);
INSERT INTO course VALUES ('END211', 'Endustri Muh', 'Endustri Muhendisligine Giris', 3);
INSERT INTO course VALUES ('XXX111', 'Tip', 'Muthis Gizli Tip Sirlari', 5);

INSERT INTO student VALUES ('11111111111', '161101080', '2016', 1, 1);
INSERT INTO student VALUES ('84958948596', '171245645', '2017', 1, 1);
INSERT INTO student VALUES ('34343343434', '185464545', '2018', 1, 1);
INSERT INTO student VALUES ('58395838281', '233453455', '2023', 0, 1);
INSERT INTO student VALUES ('38858577737', '121222222', '2012', 0, 0);
INSERT INTO student VALUES ('57399502842', '111111111', '2011', 1, 0);

INSERT INTO major VALUES ('11111111111', 'Bilgisayar Muh', 'Anadal');
INSERT INTO major VALUES ('84958948596', 'Endustri Muh', 'Anadal');
INSERT INTO major VALUES ('84958948596', 'Matematik', 'Yandal');
INSERT INTO major VALUES ('34343343434', 'Tip', 'Anadal');
INSERT INTO major VALUES ('58395838281', 'Hukuk', 'Anadal');
INSERT INTO major VALUES ('38858577737', 'Bilgisayar Muh', 'Anadal');
INSERT INTO major VALUES ('57399502842', 'Bilgisayar Muh', 'Anadal');
--
INSERT INTO term VALUES ('2019/2020', 'Bahar', 30000);
INSERT INTO term VALUES ('2019/2020', 'Guz', 30000);
INSERT INTO term VALUES ('2019/2020', 'Yaz', 35000);
INSERT INTO term VALUES ('2018/2019', 'Yaz', 25000);
INSERT INTO term VALUES ('2016/2017', 'Bahar', 20000);
--
INSERT INTO book VALUES ('Database Systems', 'BIL372');
INSERT INTO book VALUES ('Database Systems 2.nd edition', 'BIL372');
INSERT INTO book VALUES ('Introduction to Java', 'BIL113');
INSERT INTO book VALUES ('Tip Kitabi', 'XXX111');
INSERT INTO book VALUES ('Signal Processing, an Introduction', 'ELE222');
--
INSERT INTO employee VALUES (86038502993, 100000, 12345);
INSERT INTO employee VALUES (77685930124, 120000, 23456);
INSERT INTO employee VALUES (86728694869, 140000, 12222);
INSERT INTO employee VALUES (57399502842, 150000, 33333);
INSERT INTO employee VALUES (11305738291, 160000, 53434);
INSERT INTO employee VALUES (40183884848, 170000, 54665);
INSERT INTO employee VALUES (50098212002, 180000, 99595);
INSERT INTO employee VALUES (17624205055, 190000, 88884);
--
INSERT INTO professor VALUES (86038502993, 'Doc Dr', 'Bilgisayar Muh');
INSERT INTO professor VALUES (77685930124, 'Doc Dr', 'Bilgisayar Muh');
INSERT INTO professor VALUES (40183884848, 'Prof Dr', 'Tip');
INSERT INTO professor VALUES (50098212002, 'Doc Dr', 'Hukuk');
INSERT INTO professor VALUES (17624205055, 'Prof Dr', 'Denizcilik');
--
INSERT INTO student_assistant VALUES (57399502842, 50098212002);
--
INSERT INTO staff VALUES (11305738291, 'X Calisani');
INSERT INTO staff VALUES (86728694869, 'Mali Isler Sorumlusu');
--
INSERT INTO assists VALUES (57399502842, 'BIL372');
--





INSERT INTO takes_course VALUES (11111111111, 'BIL372', 20, 30, 'FF');
--
INSERT INTO teaches VALUES (86038502993, 'BIL113', '2019/2020', 'Bahar');
INSERT INTO teaches VALUES (77685930124, 'BIL555', '2018/2019', 'Yaz');
--
INSERT INTO prerequisite VALUES ('BIL372', 'BIL113');
--
INSERT INTO company VALUES ('comp1231x12', 'Big Company', 'Company Street 13', 5678901244, 1);
--
INSERT INTO co_op VALUES ('comp1231x12', 11111111111, '1. OEG', 'Hasan', 'hasan@bigcompany.com');
--
INSERT INTO limits VALUES ('comp1231x12', 'Bilgisayar Muh', 5);
--


----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------


INSERT INTO person VALUES 
  (11111111112, 'Ayberk', 'Uslu', 'M', 'ayberk@gmail.com', 5555555550);
  
INSERT INTO student VALUES ('11111111112', '161101055', '2016', 1, 1);

INSERT INTO major VALUES ('11111111112', 'Bilgisayar Muh', 'Anadal');
INSERT INTO takes_course VALUES (11111111112, 'BIL372', 20, 30, 'FF');
INSERT INTO takes_course VALUES (11111111112, 'BIL113', 70, 80, 'AA');
INSERT INTO takes_course VALUES (11111111112, 'ISP001', 60, 70, 'CC');
INSERT INTO takes_course VALUES (11111111112, 'ELE222', 40, 40, 'DD');
INSERT INTO takes_course VALUES (11111111112, 'BIL555', 65, 75, 'BB');

INSERT INTO company VALUES ('Sirket1', 'hepsiburada', 'Ankara ', 5558527419, 1);
INSERT INTO company VALUES ('Sirket2', 'getir', 'Istanbul', 5469853245, 1);

INSERT INTO co_op VALUES ('Sirket1', 11111111112, '1. OEG', 'Ahmet Bey', 'ahmet@sirket.com');
INSERT INTO co_op VALUES ('Sirket2', 11111111112, '2. OEG', 'Burak', 'burak@sirket.com');



INSERT INTO person VALUES 
  (11111111113, 'Basak', 'Yildirim', 'F', 'basak@gmail.com', 5555555551);
  
INSERT INTO student VALUES ('11111111113', '161101054', '2016', 1, 1);

INSERT INTO major VALUES ('11111111113', 'Bilgisayar Muh', 'Anadal');
INSERT INTO takes_course VALUES (11111111113, 'BIL372', 40, 40, 'DD');
INSERT INTO takes_course VALUES (11111111113, 'BIL113', 60, 85, 'BB');
INSERT INTO takes_course VALUES (11111111113, 'ISP001', 60, 70, 'CC');
INSERT INTO takes_course VALUES (11111111113, 'ELE222', 70, 80, 'AA');
INSERT INTO takes_course VALUES (11111111113, 'BIL555', 20, 30, 'FF');

INSERT INTO co_op VALUES ('Sirket1', 11111111113, '1. OEG', 'Ahmet Bey', 'ahmet@sirket.com');



INSERT INTO person VALUES 
  (11111111114, 'Hasan', 'Tahsin', 'M', 'tahsin@gmail.com', 5555555552);
  
INSERT INTO student VALUES ('11111111114', '161101053', '2016', 1, 1);

INSERT INTO major VALUES ('11111111114', 'Bilgisayar Muh', 'Anadal');
INSERT INTO takes_course VALUES (11111111114, 'BIL372', 40, 40, 'FF');
INSERT INTO takes_course VALUES (11111111114, 'BIL113', 60, 75, 'CB');
INSERT INTO takes_course VALUES (11111111114, 'ISP001', 40, 70, 'DC');
INSERT INTO takes_course VALUES (11111111114, 'ELE222', 85, 80, 'AA');
INSERT INTO takes_course VALUES (11111111114, 'BIL555', 20, 64, 'DD');

INSERT INTO co_op VALUES ('Sirket1', 11111111114, '1. OEG', 'Ahmet Bey', 'ahmet@sirket.com');


INSERT INTO person VALUES 
  (11111111115, 'Ali', 'Kemer', 'M', 'ali@gmail.com', 5555555553);
  
INSERT INTO student VALUES ('11111111115', '161101053', '2016', 1, 1);

INSERT INTO major VALUES ('11111111115', 'Bilgisayar Muh', 'Anadal');
INSERT INTO takes_course VALUES (11111111115, 'BIL372', 40, 70, 'DD');
INSERT INTO takes_course VALUES (11111111115, 'BIL113', 85, 75, 'BB');
INSERT INTO takes_course VALUES (11111111115, 'ISP001', 90, 85, 'AA');
INSERT INTO takes_course VALUES (11111111115, 'ELE222', 85, 95, 'AA');
INSERT INTO takes_course VALUES (11111111115, 'BIL555', 44, 64, 'DD');

INSERT INTO co_op VALUES ('Sirket2', 11111111115, '1. OEG', 'Selim Bey', 'selim@sirket.com');


INSERT INTO person VALUES (11111111116, 'Serhat', 'Kafa', 'M', 'serhat_fb_alex@gmail.com', 5555555554);
INSERT INTO student VALUES ('11111111116', '161101054', '2016', 1, 1);
INSERT INTO major VALUES ('11111111116', 'Bilgisayar Muh', 'Anadal');
INSERT INTO takes_course VALUES (11111111116, 'BIL372', 30, 60, 'DD');
INSERT INTO takes_course VALUES (11111111116, 'BIL113', 85, 85, 'AA');
INSERT INTO takes_course VALUES (11111111116, 'ISP001', 90, 87, 'BA');
INSERT INTO takes_course VALUES (11111111116, 'ELE222', 85, 35, 'CB');
INSERT INTO takes_course VALUES (11111111116, 'BIL555', 44, 75, 'DC');
INSERT INTO co_op VALUES ('Sirket1', 11111111116, '1. OEG', 'Mustafa Bey', 'mustafa@sirket.com');



INSERT INTO person VALUES 
  (11111111117, 'Metin', 'Coban', 'M', 'metin@gmail.com', 5555555549);
  
INSERT INTO student VALUES ('11111111117', '161101056', '2016', 1, 1);

INSERT INTO major VALUES ('11111111117', 'Endustri Muh', 'Anadal');
INSERT INTO major VALUES ('11111111117', 'Bilgisayar Muh', 'Yandal');

INSERT INTO takes_course VALUES (11111111117, 'BIL372', 20, 30, 'FF');
INSERT INTO takes_course VALUES (11111111117, 'BIL113', 70, 80, 'AA');
INSERT INTO takes_course VALUES (11111111117, 'ISP001', 60, 70, 'CC');
INSERT INTO takes_course VALUES (11111111117, 'ELE222', 40, 40, 'DD');
INSERT INTO takes_course VALUES (11111111117, 'BIL555', 65, 75, 'BB');




INSERT INTO person VALUES 
  (11111111118, 'Husnu', 'Coban', 'M', 'husnu@gmail.com', 5555555548);
INSERT INTO student VALUES ('11111111118', '161101057', '2016', 1, 1);
INSERT INTO major VALUES ('11111111118', 'Endustri Muh', 'Anadal');
INSERT INTO major VALUES ('11111111118', 'Bilgisayar Muh', 'Yandal');
INSERT INTO takes_course VALUES (11111111118, 'BIL372', 45, 55, 'DD');
INSERT INTO takes_course VALUES (11111111118, 'BIL113', 70, 80, 'AA');
INSERT INTO takes_course VALUES (11111111118, 'ISP001', 60, 70, 'CC');
INSERT INTO takes_course VALUES (11111111118, 'ELE222', 40, 40, 'DD');
INSERT INTO takes_course VALUES (11111111118, 'BIL555', 65, 75, 'BB');




INSERT INTO person VALUES 
  (11111111119, 'Tekin', 'Coban', 'M', 'tokmak_tekin@gmail.com', 5555555547);
INSERT INTO student VALUES ('11111111119', '161101058', '2016', 1, 1);
INSERT INTO major VALUES ('11111111119', 'Endustri Muh', 'Anadal');
INSERT INTO major VALUES ('11111111119', 'Bilgisayar Muh', 'Yandal');
INSERT INTO takes_course VALUES (11111111119, 'BIL372', 45, 55, 'DD');
INSERT INTO takes_course VALUES (11111111119, 'BIL113', 64, 80, 'BB');
INSERT INTO takes_course VALUES (11111111119, 'ISP001', 60, 70, 'CC');
INSERT INTO takes_course VALUES (11111111119, 'ELE222', 40, 40, 'DD');
INSERT INTO takes_course VALUES (11111111119, 'BIL555', 65, 75, 'BB');



INSERT INTO book VALUES ('1 Haftada Ispanyol Olmak 101', 'ISP001');
INSERT INTO book VALUES ('Bilgisayar Sistemleri', 'BIL555');


INSERT INTO person VALUES 
  (11111111120, 'Suat', 'Coban', 'F', 'suat_coban@gmail.com', 5555555546);
INSERT INTO student_assistant VALUES (11111111120, 86038502993);
INSERT INTO student VALUES ('11111111120', '161101059', '2014', 1, 1);
INSERT INTO major VALUES ('11111111120', 'Bilgisayar Muh', 'Anadal');
INSERT INTO assists VALUES (11111111120, 'BIL372');





