window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11385","name":"hr_v_TM100_body","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view  hr_v_TM100_body as  select HR_TM_DelayApplyDetail.cPsn_Num,hr_hi_person.cPsn_Name,hr_hi_person.jobnumber,HR_TM_DelayApplyDetail.cDepCode,HR_TM_DelayApplyDetail.cDepName,HR_TM_DelayApplyDetail.iYearPeriod,HR_TM_DelayApplyDetail.iDelayedNum,HR_TM_DelayApplyDetail.iDelayAmount,HR_TM_DelayApplyDetail.dLastestTime,HR_TM_DelayApplyDetail.dDelayLastestTime,HR_TM_DelayApplyDetail.cVoucherId,HR_TM_DelayApplyDetail.PK_HR_TM_DelayApplyDetail,HR_TM_DelayApplyDetail.iRecordID,HR_TM_DelayApplyDetail.dBeginDate from HR_TM_DelayApplyDetail left join hr_hi_person on HR_TM_DelayApplyDetail.cPsn_num=hr_hi_person.cPsn_num left join department on hr_hi_person.cDept_num=department.cdepcode left join hr_hi_probation on HR_TM_DelayApplyDetail.cPsn_num = hr_hi_probation.cPsn_num and hr_hi_probation.blastflag =1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_TM100_body"},{"field":"Type","value":"View"}],"columns":[{"id":"column-228189","object_id":"column-228189","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228190","object_id":"column-228190","name":"cPsn_Name","name_without_path":"cPsn_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228191","object_id":"column-228191","name":"jobnumber","name_without_path":"jobnumber","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228192","object_id":"column-228192","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228193","object_id":"column-228193","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228194","object_id":"column-228194","name":"iYearPeriod","name_without_path":"iYearPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228195","object_id":"column-228195","name":"iDelayedNum","name_without_path":"iDelayedNum","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228196","object_id":"column-228196","name":"iDelayAmount","name_without_path":"iDelayAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228197","object_id":"column-228197","name":"dLastestTime","name_without_path":"dLastestTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228198","object_id":"column-228198","name":"dDelayLastestTime","name_without_path":"dDelayLastestTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228199","object_id":"column-228199","name":"cVoucherId","name_without_path":"cVoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228200","object_id":"column-228200","name":"PK_HR_TM_DelayApplyDetail","name_without_path":"PK_HR_TM_DelayApplyDetail","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228201","object_id":"column-228201","name":"iRecordID","name_without_path":"iRecordID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228202","object_id":"column-228202","name":"dBeginDate","name_without_path":"dBeginDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};