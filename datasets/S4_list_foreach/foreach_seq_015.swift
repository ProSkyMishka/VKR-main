import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<19, id: \.self) { k in
                Text("fs015-row \(k)")
            }
        }
    }
}
