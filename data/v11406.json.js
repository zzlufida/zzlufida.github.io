window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11406","name":"hr_v_TR13","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view  hr_v_TR13 as  select HR_TR_SUBJECT.vsubjectcode,HR_TR_SUBJECT.vsubjectname,HR_TR_SUBJECT.vsubjectcontent,HR_TR_SUBJECT.nsubjectperiod,HR_TR_SUBJECT.vremark,HR_TR_SUBJECT.bvalid,HR_TR_SUBJECT.bGenericCourse,HR_TR_SUBJECT.vApplyJobSeries,HR_TR_SUBJECT.vApplyJob,hr_tr_subject.blastflag,hr_tr_subject.iRecordID,hr_tr_subject.nstatus2,hr_tr_subject.vstatus1,hr_tr_subject.PK_hr_tr_subject, convert(nvarchar,convert(money,HR_TR_SUBJECT.hrts),2) as hrts from HR_TR_SUBJECT","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_TR13"},{"field":"Type","value":"View"}],"columns":[{"id":"column-228631","object_id":"column-228631","name":"vsubjectcode","name_without_path":"vsubjectcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228632","object_id":"column-228632","name":"vsubjectname","name_without_path":"vsubjectname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228633","object_id":"column-228633","name":"vsubjectcontent","name_without_path":"vsubjectcontent","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"600","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228634","object_id":"column-228634","name":"nsubjectperiod","name_without_path":"nsubjectperiod","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"10, 1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228635","object_id":"column-228635","name":"vremark","name_without_path":"vremark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228636","object_id":"column-228636","name":"bvalid","name_without_path":"bvalid","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228637","object_id":"column-228637","name":"bGenericCourse","name_without_path":"bGenericCourse","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228638","object_id":"column-228638","name":"vApplyJobSeries","name_without_path":"vApplyJobSeries","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228639","object_id":"column-228639","name":"vApplyJob","name_without_path":"vApplyJob","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228640","object_id":"column-228640","name":"blastflag","name_without_path":"blastflag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228641","object_id":"column-228641","name":"iRecordID","name_without_path":"iRecordID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228642","object_id":"column-228642","name":"nstatus2","name_without_path":"nstatus2","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228643","object_id":"column-228643","name":"vstatus1","name_without_path":"vstatus1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228644","object_id":"column-228644","name":"PK_hr_tr_subject","name_without_path":"PK_hr_tr_subject","description":null,"is_pk":false,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-228645","object_id":"column-228645","name":"hrts","name_without_path":"hrts","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};