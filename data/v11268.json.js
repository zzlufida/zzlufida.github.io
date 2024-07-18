window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11268","name":"hr_v_dm_Dorm","subtype":"VIEW","is_user_defined":false,"description":null,"script":"/*==============================================================*/\r\n/* View: hr_v_dm_Dorm                                           */\r\n/*==============================================================*/\r\ncreate view hr_v_dm_Dorm as \r\nselect hr_dm_Dorm.DormCode, hr_dm_Dorm.DormName, hr_dm_Dorm.DormAddress, hr_dm_Dorm.DormMemo, hr_dm_Dorm.BedTotalNumbers, hr_dm_Dorm.UselessBedNumbers\r\nfrom hr_dm_dorm\r\nwhere typeid = 1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_dm_Dorm"},{"field":"Type","value":"View"}],"columns":[{"id":"column-224182","object_id":"column-224182","name":"DormCode","name_without_path":"DormCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224183","object_id":"column-224183","name":"DormName","name_without_path":"DormName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224184","object_id":"column-224184","name":"DormAddress","name_without_path":"DormAddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224185","object_id":"column-224185","name":"DormMemo","name_without_path":"DormMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224186","object_id":"column-224186","name":"BedTotalNumbers","name_without_path":"BedTotalNumbers","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224187","object_id":"column-224187","name":"UselessBedNumbers","name_without_path":"UselessBedNumbers","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};