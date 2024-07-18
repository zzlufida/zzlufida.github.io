window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13746","name":"v_mrpCurrent","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_mrpCurrent\r\nas select isnull(v.SoType,0) as SoType,isnull(v.SoDId,0) as SoDId,v.cInvCode,cFree1=coalesce(v.cFree1,''),cFree2=coalesce(v.cFree2,''),cFree3=coalesce(v.cFree3,''),cFree4=coalesce(v.cFree4,''),cFree5=coalesce(v.cFree5,''),cFree6=coalesce(v.cFree6,''),cFree7=coalesce(v.cFree7,''),cFree8=coalesce(v.cFree8,''),cFree9=coalesce(v.cFree9,''),cFree10=coalesce(v.cFree10,''),iQuantity=sum(coalesce(v.iQuantity,0)),fInQuantity=sum(coalesce(v.fInQuantity,0)),fOutQuantity=sum(coalesce(v.fOutQuantity,0)),fTransInQuantity=sum(coalesce(v.fTransInQuantity,0)),fTransOutQuantity=sum(coalesce(v.fTransOutQuantity,0)),fStopQuantity=sum(coalesce(v.fStopQuantity,0))\r\n   from ST_MRPCurrentView v left outer join Warehouse  w on w.cWhCode = v.cWhCode\r\n  where coalesce(w.bMRP,1) = 1\r\n group by v.SoType,v.SoDId,v.cInvCode,coalesce(v.cFree1,''),coalesce(v.cFree2,''),coalesce(v.cFree3,''),coalesce(v.cFree4,''),coalesce(v.cFree5,''),coalesce(v.cFree6,''),coalesce(v.cFree7,''),coalesce(v.cFree8,''),coalesce(v.cFree9,''),coalesce(v.cFree10,'')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_mrpCurrent"},{"field":"Type","value":"View"}],"columns":[{"id":"column-397245","object_id":"column-397245","name":"SoType","name_without_path":"SoType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397246","object_id":"column-397246","name":"SoDId","name_without_path":"SoDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397247","object_id":"column-397247","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397248","object_id":"column-397248","name":"cFree1","name_without_path":"cFree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397249","object_id":"column-397249","name":"cFree2","name_without_path":"cFree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397250","object_id":"column-397250","name":"cFree3","name_without_path":"cFree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397251","object_id":"column-397251","name":"cFree4","name_without_path":"cFree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397252","object_id":"column-397252","name":"cFree5","name_without_path":"cFree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397253","object_id":"column-397253","name":"cFree6","name_without_path":"cFree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397254","object_id":"column-397254","name":"cFree7","name_without_path":"cFree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397255","object_id":"column-397255","name":"cFree8","name_without_path":"cFree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397256","object_id":"column-397256","name":"cFree9","name_without_path":"cFree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397257","object_id":"column-397257","name":"cFree10","name_without_path":"cFree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397258","object_id":"column-397258","name":"iQuantity","name_without_path":"iQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397259","object_id":"column-397259","name":"fInQuantity","name_without_path":"fInQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397260","object_id":"column-397260","name":"fOutQuantity","name_without_path":"fOutQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397261","object_id":"column-397261","name":"fTransInQuantity","name_without_path":"fTransInQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397262","object_id":"column-397262","name":"fTransOutQuantity","name_without_path":"fTransOutQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397263","object_id":"column-397263","name":"fStopQuantity","name_without_path":"fStopQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};