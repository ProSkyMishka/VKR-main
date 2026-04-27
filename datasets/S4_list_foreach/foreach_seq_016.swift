import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<20, id: \.self) { k in
                Text("fs016-row \(k)")
            }
        }
    }
}
