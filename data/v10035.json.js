window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10035","name":"BG_MKV_GroupBudgetQueryDynamic","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[BG_MKV_GroupBudgetQueryDynamic]\r\nAS\r\n    SELECT  BG_FormBGDatas.cFormCode,\r\n            BG_MKV_BudgetQuery.iRowPos + BG_FormBGDatas.iRowID AS iRowPos,\r\n            BG_MKV_BudgetQuery.iColPos, BG_FormBGDatas.cItemCode,\r\n            CAST(BG_FormBGDatas.cTargetCode AS NVARCHAR) AS cTargetCode,\r\n            BG_MKV_BudgetQuery.cColumnCode, BG_FormBGDatas.cCaliberKey1,\r\n            BG_FormBGDatas.cCaliberCode1, BG_FormBGDatas.cCaliberKey2,\r\n            BG_FormBGDatas.cCaliberCode2, BG_FormBGDatas.cCaliberKey3,\r\n            BG_FormBGDatas.cCaliberCode3, BG_FormBGDatas.cCaliberKey4,\r\n            BG_FormBGDatas.cCaliberCode4, BG_FormBGDatas.cCaliberKey5,\r\n            BG_FormBGDatas.cCaliberCode5, BG_FormBGDatas.cCaliberKey6,\r\n            BG_FormBGDatas.cCaliberCode6, BG_MKV_BudgetQuery.iPeriod,\r\n            BG_FormBGDatas.iPeriodType, 1 AS bInput,\r\n            BG_FormBGDatas.cVersionCode, 1 AS bDynamic, BG_FormBGDatas.iYear\r\n    FROM    dbo.BG_GroupFormBGDatas AS BG_FormBGDatas\r\n            INNER JOIN dbo.BG_MKV_GroupBudgetQuery AS BG_MKV_BudgetQuery ON BG_FormBGDatas.cFormCode = BG_MKV_BudgetQuery.cFormCode\r\n                                                              AND BG_FormBGDatas.cTargetCode = BG_MKV_BudgetQuery.cTargetCode\r\n                                                              AND BG_FormBGDatas.cItemCode = BG_MKV_BudgetQuery.cItemCode\r\n    WHERE   ( BG_FormBGDatas.bDynamic = 1 )\r\n            AND ( BG_MKV_BudgetQuery.iRowPos = ( SELECT MIN(iRowPos) AS Expr1\r\n                                                 FROM   dbo.BG_MKV_BudgetQuery\r\n                                                 WHERE  ( cFormCode = BG_FormBGDatas.cFormCode )\r\n                                               ) )\r\n    UNION ALL\r\n    SELECT  BG_FormBGDatas.cFormCode,\r\n            BG_MKV_BudgetQuery.iRowPos + BG_FormBGDatas.iRowID AS iRowPos,\r\n            BG_MKV_BudgetQuery.iColPos, BG_FormBGDatas.cItemCode,\r\n            CAST(BG_FormBGDatas.cTargetCode AS NVARCHAR) AS cTargetCode,\r\n            BG_MKV_BudgetQuery.cColumnCode, BG_FormBGDatas.cCaliberKey1,\r\n            BG_FormBGDatas.cCaliberCode1, BG_FormBGDatas.cCaliberKey2,\r\n            BG_FormBGDatas.cCaliberCode2, BG_FormBGDatas.cCaliberKey3,\r\n            BG_FormBGDatas.cCaliberCode3, BG_FormBGDatas.cCaliberKey4,\r\n            BG_FormBGDatas.cCaliberCode4, BG_FormBGDatas.cCaliberKey5,\r\n            BG_FormBGDatas.cCaliberCode5, BG_FormBGDatas.cCaliberKey6,\r\n            BG_FormBGDatas.cCaliberCode6, BG_MKV_BudgetQuery.iPeriod,\r\n            BG_FormBGDatas.iPeriodType, 1 AS bInput,\r\n            BG_FormBGDatas.cVersionCode, 1 AS bDynamic, BG_FormBGDatas.iYear\r\n    FROM    dbo.BG_GroupFormBGTextDatas AS BG_FormBGDatas\r\n            INNER JOIN dbo.BG_MKV_GroupBudgetQuery AS BG_MKV_BudgetQuery ON BG_FormBGDatas.cFormCode = BG_MKV_BudgetQuery.cFormCode\r\n                                                              AND BG_FormBGDatas.cTargetCode = BG_MKV_BudgetQuery.cTargetCode\r\n                                                              AND BG_FormBGDatas.cItemCode = BG_MKV_BudgetQuery.cItemCode\r\n    WHERE   ( BG_FormBGDatas.bDynamic = 1 )\r\n            AND ( BG_MKV_BudgetQuery.iRowPos = ( SELECT MIN(iRowPos) AS Expr1\r\n                                                 FROM   dbo.BG_MKV_BudgetQuery\r\n                                                 WHERE  ( cFormCode = BG_FormBGDatas.cFormCode )\r\n                                               ) )\r\n    UNION ALL\r\n    SELECT  BG_FormBGDatas.cFormCode,\r\n            BG_MKV_BudgetQuery.iRowPos + BG_FormBGDatas.iRowID AS iRowPos,\r\n            dbo.BG_GroupFormCoordinateConstitute.iPosition AS iColPos,\r\n            BG_FormBGDatas.cItemCode,\r\n            CAST(BG_FormBGDatas.cTargetCode AS NVARCHAR) AS cTargetCode,\r\n            dbo.BG_GroupFormCoordinateConstitute.cColumnCode,\r\n            BG_FormBGDatas.cCaliberKey1, BG_FormBGDatas.cCaliberCode1,\r\n            BG_FormBGDatas.cCaliberKey2, BG_FormBGDatas.cCaliberCode2,\r\n            BG_FormBGDatas.cCaliberKey3, BG_FormBGDatas.cCaliberCode3,\r\n            BG_FormBGDatas.cCaliberKey4, BG_FormBGDatas.cCaliberCode4,\r\n            BG_FormBGDatas.cCaliberKey5, BG_FormBGDatas.cCaliberCode5,\r\n            BG_FormBGDatas.cCaliberKey6, BG_FormBGDatas.cCaliberCode6,\r\n            dbo.BG_GroupFormCoordinateConstitute.iPeriod,\r\n            BG_FormBGDatas.iPeriodType, 1 AS bInput,\r\n            BG_FormBGDatas.cVersionCode, 1 AS bDynamic, BG_FormBGDatas.iYear\r\n    FROM    dbo.BG_GroupFormBGDatas AS BG_FormBGDatas\r\n            INNER JOIN ( SELECT cFormCode, iDynamicRefRow + 1 AS iRowPos\r\n                         FROM   dbo.BG_GroupForm AS BG_Form\r\n                         WHERE  ( cFormCode NOT IN (\r\n                                  SELECT    BG_Form.cFormCode\r\n                                  FROM      dbo.BG_GroupFormCoordinateConstitute\r\n                                            INNER JOIN dbo.BG_GroupForm AS BG_Form ON dbo.BG_GroupFormCoordinateConstitute.cFormCode = BG_Form.cFormCode\r\n                                  WHERE     ( dbo.BG_GroupFormCoordinateConstitute.iDirection = N'0' )\r\n                                            AND ( BG_Form.bDynamic = 1 ) ) )\r\n                                AND ( bDynamic = 1 )\r\n                       ) AS BG_MKV_BudgetQuery ON BG_FormBGDatas.cFormCode = BG_MKV_BudgetQuery.cFormCode\r\n            INNER JOIN dbo.BG_GroupFormCoordinateConstitute ON dbo.BG_GroupFormCoordinateConstitute.cFormCode = BG_MKV_BudgetQuery.cFormCode\r\n                                                              AND dbo.BG_GroupFormCoordinateConstitute.cItemCode = BG_FormBGDatas.cItemCode\r\n                                                              AND dbo.BG_GroupFormCoordinateConstitute.cTargetCode = BG_FormBGDatas.cTargetCode\r\n    WHERE   ( BG_FormBGDatas.bDynamic = 1 )\r\n    UNION ALL\r\n    SELECT  BG_FormBGDatas.cFormCode,\r\n            BG_MKV_BudgetQuery.iRowPos + BG_FormBGDatas.iRowID AS iRowPos,\r\n            dbo.BG_GroupFormCoordinateConstitute.iPosition AS iColPos,\r\n            BG_FormBGDatas.cItemCode,\r\n            CAST(BG_FormBGDatas.cTargetCode AS NVARCHAR) AS cTargetCode,\r\n            dbo.BG_GroupFormCoordinateConstitute.cColumnCode,\r\n            BG_FormBGDatas.cCaliberKey1, BG_FormBGDatas.cCaliberCode1,\r\n            BG_FormBGDatas.cCaliberKey2, BG_FormBGDatas.cCaliberCode2,\r\n            BG_FormBGDatas.cCaliberKey3, BG_FormBGDatas.cCaliberCode3,\r\n            BG_FormBGDatas.cCaliberKey4, BG_FormBGDatas.cCaliberCode4,\r\n            BG_FormBGDatas.cCaliberKey5, BG_FormBGDatas.cCaliberCode5,\r\n            BG_FormBGDatas.cCaliberKey6, BG_FormBGDatas.cCaliberCode6,\r\n            dbo.BG_GroupFormCoordinateConstitute.iPeriod,\r\n            BG_FormBGDatas.iPeriodType, 1 AS bInput,\r\n            BG_FormBGDatas.cVersionCode, 1 AS bDynamic, BG_FormBGDatas.iYear\r\n    FROM    dbo.BG_GroupFormBGTextDatas AS BG_FormBGDatas\r\n            INNER JOIN ( SELECT cFormCode, iDynamicRefRow + 1 AS iRowPos\r\n                         FROM   dbo.BG_GroupForm AS BG_Form\r\n                         WHERE  ( cFormCode NOT IN (\r\n                                  SELECT    BG_Form.cFormCode\r\n                                  FROM      dbo.BG_GroupFormCoordinateConstitute\r\n                                            INNER JOIN dbo.BG_GroupForm AS BG_Form ON dbo.BG_GroupFormCoordinateConstitute.cFormCode = BG_Form.cFormCode\r\n                                  WHERE     ( dbo.BG_GroupFormCoordinateConstitute.iDirection = N'0' )\r\n                                            AND ( BG_Form.bDynamic = 1 ) ) )\r\n                                AND ( bDynamic = 1 )\r\n                       ) AS BG_MKV_BudgetQuery ON BG_FormBGDatas.cFormCode = BG_MKV_BudgetQuery.cFormCode\r\n            INNER JOIN dbo.BG_GroupFormCoordinateConstitute ON dbo.BG_GroupFormCoordinateConstitute.cFormCode = BG_MKV_BudgetQuery.cFormCode\r\n                                                              AND dbo.BG_GroupFormCoordinateConstitute.cItemCode = BG_FormBGDatas.cItemCode\r\n                                                              AND dbo.BG_GroupFormCoordinateConstitute.cTargetCode = BG_FormBGDatas.cTargetCode\r\n    WHERE   ( BG_FormBGDatas.bDynamic = 1 )","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"BG_MKV_GroupBudgetQueryDynamic"},{"field":"Type","value":"View"}],"columns":[{"id":"column-173082","object_id":"column-173082","name":"cFormCode","name_without_path":"cFormCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173083","object_id":"column-173083","name":"iRowPos","name_without_path":"iRowPos","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173084","object_id":"column-173084","name":"iColPos","name_without_path":"iColPos","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173085","object_id":"column-173085","name":"cItemCode","name_without_path":"cItemCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173086","object_id":"column-173086","name":"cTargetCode","name_without_path":"cTargetCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173087","object_id":"column-173087","name":"cColumnCode","name_without_path":"cColumnCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173088","object_id":"column-173088","name":"cCaliberKey1","name_without_path":"cCaliberKey1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173089","object_id":"column-173089","name":"cCaliberCode1","name_without_path":"cCaliberCode1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173090","object_id":"column-173090","name":"cCaliberKey2","name_without_path":"cCaliberKey2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173091","object_id":"column-173091","name":"cCaliberCode2","name_without_path":"cCaliberCode2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173092","object_id":"column-173092","name":"cCaliberKey3","name_without_path":"cCaliberKey3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173093","object_id":"column-173093","name":"cCaliberCode3","name_without_path":"cCaliberCode3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173094","object_id":"column-173094","name":"cCaliberKey4","name_without_path":"cCaliberKey4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173095","object_id":"column-173095","name":"cCaliberCode4","name_without_path":"cCaliberCode4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173096","object_id":"column-173096","name":"cCaliberKey5","name_without_path":"cCaliberKey5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173097","object_id":"column-173097","name":"cCaliberCode5","name_without_path":"cCaliberCode5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173098","object_id":"column-173098","name":"cCaliberKey6","name_without_path":"cCaliberKey6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173099","object_id":"column-173099","name":"cCaliberCode6","name_without_path":"cCaliberCode6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"90","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173100","object_id":"column-173100","name":"iPeriod","name_without_path":"iPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173101","object_id":"column-173101","name":"iPeriodType","name_without_path":"iPeriodType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173102","object_id":"column-173102","name":"bInput","name_without_path":"bInput","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173103","object_id":"column-173103","name":"cVersionCode","name_without_path":"cVersionCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173104","object_id":"column-173104","name":"bDynamic","name_without_path":"bDynamic","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173105","object_id":"column-173105","name":"iYear","name_without_path":"iYear","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};