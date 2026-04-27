import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<9, id: \.self) { k in
                Text("fs005-row \(k)")
            }
        }
    }
}
