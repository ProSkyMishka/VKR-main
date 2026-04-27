import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(1...7, id: \.self) { k in
                Text("lx002-row \(k)")
            }
        }
    }
}
