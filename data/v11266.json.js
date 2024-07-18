window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11266","name":"hr_v_dm_Bedroom","subtype":"VIEW","is_user_defined":false,"description":null,"script":"/*==============================================================*/\r\n/* View: hr_v_dm_Bedroom                                        */\r\n/*==============================================================*/\r\ncreate view hr_v_dm_Bedroom as \r\nselect hr_dm_Dorm.DormCode, hr_dm_Dorm.DormName, hr_dm_Dorm.DormAddress, hr_dm_Dorm.DormMemo, hr_dm_Dorm.BedTotalNumbers, hr_dm_Dorm.UselessBedNumbers, hr_dm_Dorm.CreateDate, hr_dm_Dorm.Equipment, hr_dm_Dorm.isAssigned, hr_dm_Dorm.IsFemale, hr_dm_Dorm.rent, hr_dm_Dorm.RoomType, hr_dm_Dorm.IsUsed\r\nfrom hr_dm_dorm\r\nwhere typeid = 5","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_dm_Bedroom"},{"field":"Type","value":"View"}],"columns":[{"id":"column-224164","object_id":"column-224164","name":"DormCode","name_without_path":"DormCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224165","object_id":"column-224165","name":"DormName","name_without_path":"DormName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224166","object_id":"column-224166","name":"DormAddress","name_without_path":"DormAddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224167","object_id":"column-224167","name":"DormMemo","name_without_path":"DormMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224168","object_id":"column-224168","name":"BedTotalNumbers","name_without_path":"BedTotalNumbers","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224169","object_id":"column-224169","name":"UselessBedNumbers","name_without_path":"UselessBedNumbers","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224170","object_id":"column-224170","name":"CreateDate","name_without_path":"CreateDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224171","object_id":"column-224171","name":"Equipment","name_without_path":"Equipment","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"300","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224172","object_id":"column-224172","name":"isAssigned","name_without_path":"isAssigned","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224173","object_id":"column-224173","name":"IsFemale","name_without_path":"IsFemale","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224174","object_id":"column-224174","name":"rent","name_without_path":"rent","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"9, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224175","object_id":"column-224175","name":"RoomType","name_without_path":"RoomType","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224176","object_id":"column-224176","name":"IsUsed","name_without_path":"IsUsed","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};