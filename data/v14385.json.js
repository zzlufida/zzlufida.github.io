window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14385","name":"WTDXBCB_M","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View WTDXBCB_M AS \r\nSELECT 'R' + R.ID AS ID ,R.cWhCode, R.dDate, R.bRdFlag , R.cBusType + '结算' AS cBusType, R.cCode ,R.[cDepCode] ,R.[cPersonCode] , R.[cHandler] , R.[cMaker] ,R.cCusCode, R.cVenCode , R.cVouchType ,R.cRdCode ,  R.cMemo  FROM RdRecord  AS  R WHERE R.cBusType='委托代销'  UNION SELECT 'E' + R.EDID AS ID ,Rs.cWhCode, R.dDate, 1 AS bRdFlag , '委托代销发货' AS cBusType, R.cEDCode ,R.[cDepCode] ,R.[cPersonCode] , R.[cVerifier] AS cHandler, R.[cMaker] ,R.cCusCode, '' AS cVenCode , '06' AS cVouchType ,R.cRdCode ,  R.cMemo  FROM EnDispatch AS R INNER JOIN EnDispatchs AS Rs ON R.EDID = Rs.EDID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"WTDXBCB_M"},{"field":"Type","value":"View"}],"columns":[{"id":"column-425119","object_id":"column-425119","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-425120","object_id":"column-425120","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-425121","object_id":"column-425121","name":"dDate","name_without_path":"dDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-425122","object_id":"column-425122","name":"bRdFlag","name_without_path":"bRdFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-425123","object_id":"column-425123","name":"cBusType","name_without_path":"cBusType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-425124","object_id":"column-425124","name":"cCode","name_without_path":"cCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-425125","object_id":"column-425125","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-425126","object_id":"column-425126","name":"cPersonCode","name_without_path":"cPersonCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-425127","object_id":"column-425127","name":"cHandler","name_without_path":"cHandler","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-425128","object_id":"column-425128","name":"cMaker","name_without_path":"cMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-425129","object_id":"column-425129","name":"cCusCode","name_without_path":"cCusCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-425130","object_id":"column-425130","name":"cVenCode","name_without_path":"cVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-425131","object_id":"column-425131","name":"cVouchType","name_without_path":"cVouchType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-425132","object_id":"column-425132","name":"cRdCode","name_without_path":"cRdCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-425133","object_id":"column-425133","name":"cMemo","name_without_path":"cMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};