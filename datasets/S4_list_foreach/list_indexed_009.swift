import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(1...14, id: \.self) { k in
                Text("lx009-row \(k)")
            }
        }
    }
}
