import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<6, id: \.self) { k in
                Text("fs002-row \(k)")
            }
        }
    }
}
