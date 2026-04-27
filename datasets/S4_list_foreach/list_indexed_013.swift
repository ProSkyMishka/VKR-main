import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(1...8, id: \.self) { k in
                Text("lx013-row \(k)")
            }
        }
    }
}
