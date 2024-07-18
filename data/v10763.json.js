window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10763","name":"FD_CadAcr","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  VIEW FD_CadAcr\r\nAS\r\nSELECT fd_transactions.transactions_id, fd_transactions.correspond_vch_id, \r\n      stuff(fd_transactions.transactions_code, 1, 0, '16') AS cCarID, \r\n      CASE WHEN fd_transactions.correspond_vch_id = '1' THEN '1' ELSE stuff(fd_transactions1.transactions_code,\r\n       1, 0, '03') END AS cDanID, fd_transactions.vouchertype_flag AS iDanType, \r\n      fd_transactions.from_date AS dFrom, fd_transactions.to_date AS dTo, \r\n      fd_transactions.bill_date AS dBill_Date, fd_accdef.cAccID AS cGAccID, NULL \r\n      AS cPAccID, fd_transactions.sum_mny AS mMoney, NULL AS cdeLx, \r\n      fd_transactions.mh_mny AS mJs, NULL AS mCdeJs, \r\n      fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_intra.cIntrID AS cIntrID, \r\n      fd_cadset.cCadID AS cCadID, fd_transactions.digest AS cDigest, NULL AS cRemark, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.calctype_flag AS iArtyp, fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType LEFT JOIN\r\n      fd_transactions AS fd_transactions1 ON \r\n      fd_transactions.correspond_vch_id = fd_transactions1.transactions_id LEFT JOIN\r\n      fd_accdef ON fd_transactions.rcv_acc_id = fd_accdef.accdef_id LEFT JOIN\r\n      fd_intra ON fd_transactions.irate_id = fd_intra.irate_id LEFT JOIN\r\n      fd_cadset ON fd_transactions.cad_id = fd_cadset.cad_id\r\nWHERE (fd_entities.iBIType = 51 OR\r\n      fd_entities.iDeriveBIType = 51)\r\nUNION\r\nSELECT fd_transactions.transactions_id, fd_transactions.correspond_vch_id, \r\n      stuff(fd_transactions.transactions_code, 1, 0, '16') AS cCarID, \r\n      CASE WHEN fd_transactions.correspond_vch_id = '1' THEN '1' ELSE stuff(fd_transactions1.transactions_code,\r\n       1, 0, '06') END AS cDanID, fd_transactions.vouchertype_flag AS iDanType, \r\n      fd_transactions.from_date AS dFrom, fd_transactions.to_date AS dTo, \r\n      fd_transactions.bill_date AS dBill_Date, NULL AS cGAccID, \r\n      fd_accdef.cAccID AS cPAccID, fd_transactions.sum_mny AS mMoney, NULL \r\n      AS cdeLx, NULL AS mJs, NULL AS mCdeJs, fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_intra.cIntrID AS cIntrID, \r\n      fd_cadset.cCadID AS cCadID, fd_transactions.digest AS cDigest, NULL AS cRemark, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.calctype_flag AS iArtyp, fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType LEFT JOIN\r\n      fd_transactions AS fd_transactions1 ON \r\n      fd_transactions.correspond_vch_id = fd_transactions1.transactions_id LEFT JOIN\r\n      fd_accdef ON fd_transactions.pay_acc_id = fd_accdef.accdef_id LEFT JOIN\r\n      fd_intra ON fd_transactions.irate_id = fd_intra.irate_id LEFT JOIN\r\n      fd_cadset ON fd_transactions.cad_id = fd_cadset.cad_id\r\nWHERE (fd_entities.iBIType = 52 OR\r\n      fd_entities.iDeriveBIType = 52)\r\nUNION\r\nSELECT fd_transactions.transactions_id, fd_transactions.correspond_vch_id, \r\n      stuff(fd_transactions.transactions_code, 1, 0, '16') AS cCarID, \r\n      CASE WHEN fd_transactions.correspond_vch_id = '1' THEN '1' ELSE stuff(fd_transactions1.transactions_code,\r\n       1, 0, '07') END AS cDanID, fd_transactions.vouchertype_flag AS iDanType, \r\n      fd_transactions.from_date AS dFrom, fd_transactions.to_date AS dTo, \r\n      fd_transactions.bill_date AS dBill_Date, fd_accdef.cAccID AS cGAccID, \r\n      fd_accdef2.cAccID AS cPAccID, fd_transactions.sum_mny AS mMoney, NULL \r\n      AS cdeLx, NULL AS mJs, NULL AS mCdeJs, fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_intra.cIntrID AS cIntrID, \r\n      fd_cadset.cCadID AS cCadID, fd_transactions.digest AS cDigest, NULL AS cRemark, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.calctype_flag AS iArtyp, fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType LEFT JOIN\r\n      fd_transactions AS fd_transactions1 ON \r\n      fd_transactions.correspond_vch_id = fd_transactions1.transactions_id LEFT JOIN\r\n      fd_accdef ON fd_transactions.rcv_acc_id = fd_accdef.accdef_id LEFT JOIN\r\n      fd_accdef AS fd_accdef2 ON fd_transactions.pay_acc_id = fd_accdef2.accdef_id LEFT \r\n      JOIN\r\n      fd_intra ON fd_transactions.irate_id = fd_intra.irate_id LEFT JOIN\r\n      fd_cadset ON fd_transactions.cad_id = fd_cadset.cad_id\r\nWHERE (fd_entities.iBIType = 53 OR\r\n      fd_entities.iDeriveBIType = 53)\r\nUNION\r\nSELECT fd_transactions.transactions_id, fd_transactions.correspond_vch_id, \r\n      stuff(fd_transactions.transactions_code, 1, 0, '16') AS cCarID, \r\n      CASE WHEN fd_transactions.correspond_vch_id = '1' THEN '1' ELSE stuff(fd_transactions1.transactions_code,\r\n       1, 0, '01') END AS cDanID, fd_transactions.vouchertype_flag AS iDanType, \r\n      fd_transactions.from_date AS dFrom, fd_transactions.to_date AS dTo, \r\n      fd_transactions.bill_date AS dBill_Date, fd_accdef.cAccID AS cGAccID, NULL \r\n      AS cPAccID, fd_transactions.sum_mny AS mMoney, NULL AS cdeLx, \r\n      fd_transactions.mh_mny AS mJs, NULL AS mCdeJs, \r\n      fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_intra.cIntrID AS cIntrID, \r\n      fd_cadset.cCadID AS cCadID, fd_transactions.digest AS cDigest, NULL AS cRemark, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.calctype_flag AS iArtyp, fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType LEFT JOIN\r\n      fd_transactions AS fd_transactions1 ON \r\n      fd_transactions.correspond_vch_id = fd_transactions1.transactions_id LEFT JOIN\r\n      fd_accdef ON fd_transactions.rcv_acc_id = fd_accdef.accdef_id LEFT JOIN\r\n      fd_intra ON fd_transactions.irate_id = fd_intra.irate_id LEFT JOIN\r\n      fd_cadset ON fd_transactions.cad_id = fd_cadset.cad_id\r\nWHERE (fd_entities.iBIType = 54 OR\r\n      fd_entities.iDeriveBIType = 54)\r\nUNION\r\nSELECT fd_transactions.transactions_id, fd_transactions.correspond_vch_id, \r\n      stuff(fd_transactions.transactions_code, 1, 0, '16') AS cCarID, \r\n      CASE WHEN fd_transactions.correspond_vch_id = '1' THEN '1' ELSE stuff(fd_transactions1.transactions_code,\r\n       1, 0, '05') END AS cDanID, fd_transactions.vouchertype_flag AS iDanType, \r\n      fd_transactions.from_date AS dFrom, fd_transactions.to_date AS dTo, \r\n      fd_transactions.bill_date AS dBill_Date, NULL AS cGAccID, \r\n      fd_accdef.cAccID AS cPAccID, fd_transactions.sum_mny AS mMoney, NULL \r\n      AS cdeLx, NULL AS mJs, NULL AS mCdeJs, fd_transactions.bill_name AS cBillCode, \r\n      fd_transactions.check_name AS cCheckCode, \r\n      fd_transactions.book_name AS cBookCode, fd_intra.cIntrID AS cIntrID, \r\n      fd_cadset.cCadID AS cCadID, fd_transactions.digest AS cDigest, NULL AS cRemark, \r\n      fd_transactions.exchange_rate AS nFrat, fd_transactions.natural_mny AS mMoney_F, \r\n      fd_transactions.calctype_flag AS iArtyp, fd_transactions.settle_flag AS bSettle, \r\n      fd_transactions.money_name AS money_name\r\nFROM fd_transactions LEFT JOIN\r\n      fd_entities ON substring(fd_transactions.transactions_id, 1, 2) \r\n      = fd_entities.iBIType LEFT JOIN\r\n      fd_transactions AS fd_transactions1 ON \r\n      fd_transactions.correspond_vch_id = fd_transactions1.transactions_id LEFT JOIN\r\n      fd_accdef ON fd_transactions.pay_acc_id = fd_accdef.accdef_id LEFT JOIN\r\n      fd_intra ON fd_transactions.irate_id = fd_intra.irate_id LEFT JOIN\r\n      fd_cadset ON fd_transactions.cad_id = fd_cadset.cad_id\r\nWHERE (fd_entities.iBIType = 55 OR\r\n      fd_entities.iDeriveBIType = 55)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"FD_CadAcr"},{"field":"Type","value":"View"}],"columns":[{"id":"column-204633","object_id":"column-204633","name":"transactions_id","name_without_path":"transactions_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204634","object_id":"column-204634","name":"correspond_vch_id","name_without_path":"correspond_vch_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204635","object_id":"column-204635","name":"cCarID","name_without_path":"cCarID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204636","object_id":"column-204636","name":"cDanID","name_without_path":"cDanID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204637","object_id":"column-204637","name":"iDanType","name_without_path":"iDanType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204638","object_id":"column-204638","name":"dFrom","name_without_path":"dFrom","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204639","object_id":"column-204639","name":"dTo","name_without_path":"dTo","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204640","object_id":"column-204640","name":"dBill_Date","name_without_path":"dBill_Date","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204641","object_id":"column-204641","name":"cGAccID","name_without_path":"cGAccID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204642","object_id":"column-204642","name":"cPAccID","name_without_path":"cPAccID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204643","object_id":"column-204643","name":"mMoney","name_without_path":"mMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204644","object_id":"column-204644","name":"cdeLx","name_without_path":"cdeLx","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204645","object_id":"column-204645","name":"mJs","name_without_path":"mJs","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204646","object_id":"column-204646","name":"mCdeJs","name_without_path":"mCdeJs","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204647","object_id":"column-204647","name":"cBillCode","name_without_path":"cBillCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204648","object_id":"column-204648","name":"cCheckCode","name_without_path":"cCheckCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204649","object_id":"column-204649","name":"cBookCode","name_without_path":"cBookCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204650","object_id":"column-204650","name":"cIntrID","name_without_path":"cIntrID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204651","object_id":"column-204651","name":"cCadID","name_without_path":"cCadID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204652","object_id":"column-204652","name":"cDigest","name_without_path":"cDigest","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204653","object_id":"column-204653","name":"cRemark","name_without_path":"cRemark","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204654","object_id":"column-204654","name":"nFrat","name_without_path":"nFrat","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"16, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204655","object_id":"column-204655","name":"mMoney_F","name_without_path":"mMoney_F","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204656","object_id":"column-204656","name":"iArtyp","name_without_path":"iArtyp","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204657","object_id":"column-204657","name":"bSettle","name_without_path":"bSettle","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204658","object_id":"column-204658","name":"money_name","name_without_path":"money_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};