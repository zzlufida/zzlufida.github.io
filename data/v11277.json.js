window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11277","name":"hr_v_HM104_body_show","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view  hr_v_HM104_body_show as  select  case isnull(hr_hi_edu.blastflag,1) when '1' then dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00001') else dbo.UDF_GetResourceMessageByID('U8.HR.HM.hr_HRVouchBus.00002') end as blastflag,hr_hi_edu.cPsn_Num,hr_hi_edu.cVoucherId, convert(nchar(19),hr_hi_edu.ddegreedate,120) ddegreedate, convert(nchar(19),hr_hi_edu.dentranceDate,120) dentranceDate, convert(nchar(19),hr_hi_edu.dgrduateDate,120) dgrduateDate,hr_hi_edu.iRecordId,hr_hi_edu.nedusystem,hr_hi_edu.nstatus2,hr_hi_edu.PK_hr_hi_edu,hr_hi_edu.vcertifcode,hr_hi_edu.vdegreeunit,hr_hi_edu.vmemo,hr_hi_edu.vschool,hr_hi_edu.vstatus1, HR_CT0021.vdescription AS reducation, HR_CT0032.vdescription AS rdegree, HR_CT0043.vdescription AS rmajor, HR_CT0264.vdescription AS rstudymode from hr_hi_edu   Left join HR_CT002 as HR_CT0021 on hr_hi_edu.reducation=HR_CT0021.ccodeid Left join HR_CT003 as HR_CT0032 on hr_hi_edu.rdegree=HR_CT0032.ccodeid Left join HR_CT004 as HR_CT0043 on hr_hi_edu.rmajor=HR_CT0043.ccodeid Left join HR_CT026 as HR_CT0264 on hr_hi_edu.rstudymode=HR_CT0264.ccodeid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_HM104_body_show"},{"field":"Type","value":"View"}],"columns":[{"id":"column-224430","object_id":"column-224430","name":"blastflag","name_without_path":"blastflag","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224431","object_id":"column-224431","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224432","object_id":"column-224432","name":"cVoucherId","name_without_path":"cVoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224433","object_id":"column-224433","name":"ddegreedate","name_without_path":"ddegreedate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224434","object_id":"column-224434","name":"dentranceDate","name_without_path":"dentranceDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224435","object_id":"column-224435","name":"dgrduateDate","name_without_path":"dgrduateDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224436","object_id":"column-224436","name":"iRecordId","name_without_path":"iRecordId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224437","object_id":"column-224437","name":"nedusystem","name_without_path":"nedusystem","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"3, 1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224438","object_id":"column-224438","name":"nstatus2","name_without_path":"nstatus2","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224439","object_id":"column-224439","name":"PK_hr_hi_edu","name_without_path":"PK_hr_hi_edu","description":null,"is_pk":false,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224440","object_id":"column-224440","name":"vcertifcode","name_without_path":"vcertifcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"28","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224441","object_id":"column-224441","name":"vdegreeunit","name_without_path":"vdegreeunit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224442","object_id":"column-224442","name":"vmemo","name_without_path":"vmemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"256","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224443","object_id":"column-224443","name":"vschool","name_without_path":"vschool","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224444","object_id":"column-224444","name":"vstatus1","name_without_path":"vstatus1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224445","object_id":"column-224445","name":"reducation","name_without_path":"reducation","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224446","object_id":"column-224446","name":"rdegree","name_without_path":"rdegree","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224447","object_id":"column-224447","name":"rmajor","name_without_path":"rmajor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224448","object_id":"column-224448","name":"rstudymode","name_without_path":"rstudymode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};