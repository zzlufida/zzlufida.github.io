window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11258","name":"hr_v_BD01_body","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view  hr_v_BD01_body as  select hr_hi_WEFee.cVoucherId,HR_HI_WEFEE.iMonth,hr_hi_WEFee.iRecordID,HR_HI_WEFEE.iYear,HR_HI_WEFEE.nGasFee,HR_HI_WEFEE.nPutUpFee,hr_hi_WEFee.nstatus2,HR_HI_WEFEE.nWaterElecFee,hr_hi_WEFee.PK_hr_hi_WEFee,hr_hi_WEFee.vstatus1,hr_hi_WEFee.blastflag,Department.cDepName,HR_HI_WEFEE.cMemo,hr_hi_WEFee.cPsn_Num,hr_hi_WEFee.cStatus,hr_hi_person.cPsn_Name from hr_hi_WEFee left join hr_hi_person on hr_hi_WEFee.cPsn_num=hr_hi_person.cPsn_num left join department on hr_hi_person.cDept_num=department.cdepcode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_BD01_body"},{"field":"Type","value":"View"}],"columns":[{"id":"column-224023","object_id":"column-224023","name":"cVoucherId","name_without_path":"cVoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224024","object_id":"column-224024","name":"iMonth","name_without_path":"iMonth","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224025","object_id":"column-224025","name":"iRecordID","name_without_path":"iRecordID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224026","object_id":"column-224026","name":"iYear","name_without_path":"iYear","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224027","object_id":"column-224027","name":"nGasFee","name_without_path":"nGasFee","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"15, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224028","object_id":"column-224028","name":"nPutUpFee","name_without_path":"nPutUpFee","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"15, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224029","object_id":"column-224029","name":"nstatus2","name_without_path":"nstatus2","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"5, 1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224030","object_id":"column-224030","name":"nWaterElecFee","name_without_path":"nWaterElecFee","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"15, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224031","object_id":"column-224031","name":"PK_hr_hi_WEFee","name_without_path":"PK_hr_hi_WEFee","description":null,"is_pk":false,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224032","object_id":"column-224032","name":"vstatus1","name_without_path":"vstatus1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224033","object_id":"column-224033","name":"blastflag","name_without_path":"blastflag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224034","object_id":"column-224034","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224035","object_id":"column-224035","name":"cMemo","name_without_path":"cMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224036","object_id":"column-224036","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224037","object_id":"column-224037","name":"cStatus","name_without_path":"cStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224038","object_id":"column-224038","name":"cPsn_Name","name_without_path":"cPsn_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};