window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12626","name":"V_AA_UserHRPersonContro","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[V_AA_UserHRPersonContro]\r\nAS  \r\n select hr_hi_person.cPsn_Num,hr_hi_person.cPsn_Name,UA_User.cUser_Id,UA_User.cUser_Name,hr_hi_jobInfo.cDutyName,Department.cDepCode,Department.cDepName,hr_hi_person.cPsnOPhone,UA_User.bCCUser from UserHRPersonContro  \r\n inner join UFSystem..UA_User as UA_User on UserHRPersonContro.cUser_Id=UA_User.cUser_Id  \r\n left join hr_hi_person  on UserHRPersonContro.cPsn_Num=hr_hi_person.cPsn_Num  \r\n left join Department on hr_hi_person.cDept_num=Department.cDepCode  \r\n left join hr_hi_jobInfo on dbo.hr_hi_person.cPsn_Num = dbo.hr_hi_jobInfo.cPsn_Num AND dbo.hr_hi_jobInfo.bPartJob = 0 AND dbo.hr_hi_jobInfo.blastflag = 1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_AA_UserHRPersonContro"},{"field":"Type","value":"View"}],"columns":[{"id":"column-314606","object_id":"column-314606","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314607","object_id":"column-314607","name":"cPsn_Name","name_without_path":"cPsn_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314608","object_id":"column-314608","name":"cUser_Id","name_without_path":"cUser_Id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314609","object_id":"column-314609","name":"cUser_Name","name_without_path":"cUser_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314610","object_id":"column-314610","name":"cDutyName","name_without_path":"cDutyName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314611","object_id":"column-314611","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314612","object_id":"column-314612","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314613","object_id":"column-314613","name":"cPsnOPhone","name_without_path":"cPsnOPhone","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-314614","object_id":"column-314614","name":"bCCUser","name_without_path":"bCCUser","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};