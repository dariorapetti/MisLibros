import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../utils/constants/color';

const styles = StyleSheet.create({
    container: {
        borderBottomColor: COLORS.BLUSH,
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: COLORS.PEACH_PUFF
    },
    details: {
        marginLeft: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: COLORS.BLUSH,
        fontSize: 18,
        marginBottom: 5
    },
    address: {
        color: COLORS.DARK_SIENNA,
        fontSize: 14
    }
});

export default styles;