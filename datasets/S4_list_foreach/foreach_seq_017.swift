import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<4, id: \.self) { k in
                Text("fs017-row \(k)")
            }
        }
    }
}
