import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72))
                .foregroundColor(.blue)
            VStack(spacing: 2) {
                Text("pc009-name")
                    .font(.title2)
                    .bold()
                Text("pc009-handle")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            Text("pc009-bio short")
                .font(.subheadline)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
            HStack(spacing: 24) {
                VStack { Text("pc009-posts"); Text("\(19)").bold() }
                VStack { Text("pc009-followers"); Text("\(109)").bold() }
                VStack { Text("pc009-likes"); Text("\(1009)").bold() }
            }
        }
        .padding()
    }
}
