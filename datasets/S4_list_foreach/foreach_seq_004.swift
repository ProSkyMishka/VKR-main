import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<8, id: \.self) { k in
                Text("fs004-row \(k)")
            }
        }
    }
}
