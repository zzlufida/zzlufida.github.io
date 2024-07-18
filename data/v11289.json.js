window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11289","name":"hr_v_HM112_header_show","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view  hr_v_HM112_header_show as  select hr_om_reEnter.vAbMemo,hr_om_reEnter.vContactAddr,hr_om_reEnter.vExpeDate,hr_om_reEnter.vIDNo,hr_om_reEnter.vMobile,hr_om_reEnter.vPhone,hr_om_reEnter.vPostCode,hr_om_reEnter.vSchool,hr_om_reEnter.cVoucherId, convert(nchar(19),hr_om_reEnter.dBirthDate,120) dBirthDate, convert(nchar(19),hr_om_reEnter.dGraDate,120) dGraDate, convert(nchar(19),hr_om_reEnter.dJoinJob,120) dJoinJob,hr_om_reEnter.eEmail, HR_CT0021.vdescription AS rMaxEdu, HR_CT0042.vdescription AS vSpecialty, HR_CT0053.vdescription AS rNational, HR_CT0074.vdescription AS rNativePlace, HR_CT0075.vdescription AS rHouseRegister, HR_CT0096.vdescription AS rMarriStatus, hr_CT1567.vDescription AS rIDType from hr_om_reEnter Left join HR_CT002 as HR_CT0021 on hr_om_reEnter.rMaxEdu=HR_CT0021.ccodeid Left join HR_CT004 as HR_CT0042 on hr_om_reEnter.vSpecialty=HR_CT0042.ccodeid Left join HR_CT005 as HR_CT0053 on hr_om_reEnter.rNational=HR_CT0053.ccodeid Left join HR_CT007 as HR_CT0074 on hr_om_reEnter.rNativePlace=HR_CT0074.ccodeid Left join HR_CT007 as HR_CT0075 on hr_om_reEnter.rHouseRegister=HR_CT0075.ccodeid Left join HR_CT009 as HR_CT0096 on hr_om_reEnter.rMarriStatus=HR_CT0096.ccodeid Left join hr_CT156 as hr_CT1567 on hr_om_reEnter.rIDType=hr_CT1567.cCodeID where hr_om_reEnter.cCode ='HM111'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_HM112_header_show"},{"field":"Type","value":"View"}],"columns":[{"id":"column-224623","object_id":"column-224623","name":"vAbMemo","name_without_path":"vAbMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224624","object_id":"column-224624","name":"vContactAddr","name_without_path":"vContactAddr","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224625","object_id":"column-224625","name":"vExpeDate","name_without_path":"vExpeDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224626","object_id":"column-224626","name":"vIDNo","name_without_path":"vIDNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224627","object_id":"column-224627","name":"vMobile","name_without_path":"vMobile","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224628","object_id":"column-224628","name":"vPhone","name_without_path":"vPhone","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224629","object_id":"column-224629","name":"vPostCode","name_without_path":"vPostCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224630","object_id":"column-224630","name":"vSchool","name_without_path":"vSchool","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224631","object_id":"column-224631","name":"cVoucherId","name_without_path":"cVoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224632","object_id":"column-224632","name":"dBirthDate","name_without_path":"dBirthDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224633","object_id":"column-224633","name":"dGraDate","name_without_path":"dGraDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224634","object_id":"column-224634","name":"dJoinJob","name_without_path":"dJoinJob","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224635","object_id":"column-224635","name":"eEmail","name_without_path":"eEmail","description":null,"is_pk":false,"is_identity":false,"data_type":"UFemail: nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224636","object_id":"column-224636","name":"rMaxEdu","name_without_path":"rMaxEdu","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224637","object_id":"column-224637","name":"vSpecialty","name_without_path":"vSpecialty","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224638","object_id":"column-224638","name":"rNational","name_without_path":"rNational","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224639","object_id":"column-224639","name":"rNativePlace","name_without_path":"rNativePlace","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224640","object_id":"column-224640","name":"rHouseRegister","name_without_path":"rHouseRegister","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224641","object_id":"column-224641","name":"rMarriStatus","name_without_path":"rMarriStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224642","object_id":"column-224642","name":"rIDType","name_without_path":"rIDType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};