import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(1...9, id: \.self) { k in
                Text("lx004-row \(k)")
            }
        }
    }
}
