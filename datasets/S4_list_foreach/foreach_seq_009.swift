import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<13, id: \.self) { k in
                Text("fs009-row \(k)")
            }
        }
    }
}
