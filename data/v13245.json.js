window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13245","name":"V_GC_MAINJOINSLAVE","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[V_GC_MAINJOINSLAVE]\r\nAS\r\nSELECT     C.itype, C.cvencuscode, C.cvencusname, A.accid AS maccid, A.acccode AS macccode, A.caddress AS mcaddress, A.cdbpwd AS mcdbpwd, \r\n                      A.cdatabase AS mcdatabase, A.datasource AS mdatashource, A.cacc_id AS mcacc_id, A.caccname AS mcaccname, A.ibeginyear AS mibeginyear, \r\n                      A.cuser_id AS mcuser_id, A.cpassword AS mcpassword, A.benable AS mbenable, A.cprefix AS mcprefix, A.cmaker AS mcmaker, A.ddate AS mdate, \r\n                      A.cmaketime AS mcmaketime, A.cmodifer AS mcmodifer, A.dmodifydate AS mdmodifydate, A.cmodifytime AS mcmodifytime, A.cremark AS mcremark, \r\n                      A.cmacadd AS mmacadd, A.dlogindate AS mdlogindate, A.connstr AS mconnstr, E.accid AS saccid, E.acccode AS sacccode, E.caddress AS scaddress, \r\n                      E.cdbpwd AS scdbpwd, E.cdatabase AS scdatabase, E.datasource AS sdatasource, E.cacc_id AS scacc_id, E.caccname AS scaccname, \r\n                      E.ibeginyear AS sibeginyear, E.cuser_id AS scuser_id, E.cpassword AS scpassword, E.benable AS sbenable, E.cprefix AS scprefix, \r\n                      E.cmaker AS scmaker, E.ddate AS sdate, E.cmaketime AS scmaketime, E.cmodifer AS scmodifer, E.dmodifydate AS sdmodifydate, \r\n                      E.cmodifytime AS scmodifytime, E.cremark AS scremark, E.cmacadd AS smacadd, E.dlogindate AS sdlogindate, E.connstr AS sconnstr\r\nFROM         dbo.GC_REGIST AS A INNER JOIN\r\n                      dbo.GC_JOINTSET AS B ON A.accid = B.accid INNER JOIN\r\n                      dbo.GC_JOINTSETS AS C ON B.id = C.id INNER JOIN\r\n                      UFSystem.dbo.UA_AccountDatabase AS D ON A.cacc_id = D.cAcc_Id INNER JOIN\r\n                      dbo.GC_REGIST AS E ON C.accid = E.accid\r\nWHERE     (D.cDatabase = DB_NAME()) AND (A.benable = 1) AND (E.benable = 1)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_GC_MAINJOINSLAVE"},{"field":"Type","value":"View"}],"columns":[{"id":"column-358640","object_id":"column-358640","name":"itype","name_without_path":"itype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358641","object_id":"column-358641","name":"cvencuscode","name_without_path":"cvencuscode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358642","object_id":"column-358642","name":"cvencusname","name_without_path":"cvencusname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358643","object_id":"column-358643","name":"maccid","name_without_path":"maccid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358644","object_id":"column-358644","name":"macccode","name_without_path":"macccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358645","object_id":"column-358645","name":"mcaddress","name_without_path":"mcaddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358646","object_id":"column-358646","name":"mcdbpwd","name_without_path":"mcdbpwd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358647","object_id":"column-358647","name":"mcdatabase","name_without_path":"mcdatabase","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358648","object_id":"column-358648","name":"mdatashource","name_without_path":"mdatashource","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358649","object_id":"column-358649","name":"mcacc_id","name_without_path":"mcacc_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358650","object_id":"column-358650","name":"mcaccname","name_without_path":"mcaccname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358651","object_id":"column-358651","name":"mibeginyear","name_without_path":"mibeginyear","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358652","object_id":"column-358652","name":"mcuser_id","name_without_path":"mcuser_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358653","object_id":"column-358653","name":"mcpassword","name_without_path":"mcpassword","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358654","object_id":"column-358654","name":"mbenable","name_without_path":"mbenable","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358655","object_id":"column-358655","name":"mcprefix","name_without_path":"mcprefix","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358656","object_id":"column-358656","name":"mcmaker","name_without_path":"mcmaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358657","object_id":"column-358657","name":"mdate","name_without_path":"mdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358658","object_id":"column-358658","name":"mcmaketime","name_without_path":"mcmaketime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358659","object_id":"column-358659","name":"mcmodifer","name_without_path":"mcmodifer","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358660","object_id":"column-358660","name":"mdmodifydate","name_without_path":"mdmodifydate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358661","object_id":"column-358661","name":"mcmodifytime","name_without_path":"mcmodifytime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358662","object_id":"column-358662","name":"mcremark","name_without_path":"mcremark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358663","object_id":"column-358663","name":"mmacadd","name_without_path":"mmacadd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358664","object_id":"column-358664","name":"mdlogindate","name_without_path":"mdlogindate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358665","object_id":"column-358665","name":"mconnstr","name_without_path":"mconnstr","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358666","object_id":"column-358666","name":"saccid","name_without_path":"saccid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358667","object_id":"column-358667","name":"sacccode","name_without_path":"sacccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358668","object_id":"column-358668","name":"scaddress","name_without_path":"scaddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358669","object_id":"column-358669","name":"scdbpwd","name_without_path":"scdbpwd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358670","object_id":"column-358670","name":"scdatabase","name_without_path":"scdatabase","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358671","object_id":"column-358671","name":"sdatasource","name_without_path":"sdatasource","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358672","object_id":"column-358672","name":"scacc_id","name_without_path":"scacc_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358673","object_id":"column-358673","name":"scaccname","name_without_path":"scaccname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358674","object_id":"column-358674","name":"sibeginyear","name_without_path":"sibeginyear","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358675","object_id":"column-358675","name":"scuser_id","name_without_path":"scuser_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358676","object_id":"column-358676","name":"scpassword","name_without_path":"scpassword","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358677","object_id":"column-358677","name":"sbenable","name_without_path":"sbenable","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358678","object_id":"column-358678","name":"scprefix","name_without_path":"scprefix","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358679","object_id":"column-358679","name":"scmaker","name_without_path":"scmaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358680","object_id":"column-358680","name":"sdate","name_without_path":"sdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358681","object_id":"column-358681","name":"scmaketime","name_without_path":"scmaketime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358682","object_id":"column-358682","name":"scmodifer","name_without_path":"scmodifer","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358683","object_id":"column-358683","name":"sdmodifydate","name_without_path":"sdmodifydate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358684","object_id":"column-358684","name":"scmodifytime","name_without_path":"scmodifytime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358685","object_id":"column-358685","name":"scremark","name_without_path":"scremark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358686","object_id":"column-358686","name":"smacadd","name_without_path":"smacadd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358687","object_id":"column-358687","name":"sdlogindate","name_without_path":"sdlogindate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358688","object_id":"column-358688","name":"sconnstr","name_without_path":"sconnstr","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};